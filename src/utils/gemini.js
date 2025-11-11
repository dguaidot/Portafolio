export const GEMINI_MODEL = 'gemini-2.5-flash';
const GEMINI_BASE_URL = 'https://generativelanguage.googleapis.com/v1/models';

export const getGeminiApiKey = () => {
  const apiKey = 'AIzaSyAOyz04ijFsx-_OBd3URdxCUBL_NbtkGpw';

  if (!apiKey) {
    throw new Error(
      'No se encontró la variable de entorno VITE_GEMINI_API_KEY. Agrega tu clave de Gemini en un archivo .env (no la subas al repositorio).'
    );
  }

  return apiKey;
};

export const listGeminiModels = async () => {
  const apiKey = getGeminiApiKey();

  const response = await fetch(`${GEMINI_BASE_URL}?key=${apiKey}`);

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(
      error?.error?.message ||
        `No se pudieron obtener los modelos de Gemini (HTTP ${response.status}).`
    );
  }

  return response.json();
};

export const callGemini = async (body, { model = GEMINI_MODEL } = {}) => {
  const apiKey = getGeminiApiKey();
  const normalizedModel = model?.startsWith('models/')
    ? model.replace(/^models\//, '')
    : model;

  return fetch(
    `${GEMINI_BASE_URL}/${normalizedModel}:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  );
};

export const streamGemini = async (
  body,
  { model = GEMINI_MODEL, signal, onChunk, onEvent } = {}
) => {
  const apiKey = getGeminiApiKey();
  const normalizedModel = model?.startsWith('models/')
    ? model.replace(/^models\//, '')
    : model;

  const response = await fetch(
    `${GEMINI_BASE_URL}/${normalizedModel}:streamGenerateContent?alt=sse&key=${apiKey}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      signal,
    }
  );

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(
      error?.error?.message ||
        `Error en la llamada streaming (HTTP ${response.status}).`
    );
  }

  if (!response.body) {
    throw new Error(
      'La respuesta de Gemini no admite streaming en este navegador.'
    );
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  let eventBuffer = '';
  let fullText = '';
  let lastEvent = null;

  const flushEvent = () => {
    if (!eventBuffer.trim()) {
      eventBuffer = '';
      return;
    }

    const dataString = eventBuffer.trim();
    eventBuffer = '';

    if (dataString === '[DONE]') {
      return 'done';
    }

    try {
      const parsed = JSON.parse(dataString);
      lastEvent = parsed;

      const parts =
        parsed?.candidates?.[0]?.content?.parts?.map((part) => part.text || '') ??
        [];
      const chunkText = parts.join('');

      if (chunkText) {
        fullText += chunkText;
        if (typeof onChunk === 'function') {
          onChunk(chunkText, parsed);
        }
      }

      if (typeof onEvent === 'function') {
        onEvent(parsed);
      }
    } catch (error) {
      console.error('No se pudo parsear un evento SSE de Gemini:', error);
    }
  };

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() ?? '';

    for (const rawLine of lines) {
      const line = rawLine.trimEnd();

      if (!line) {
        const status = flushEvent();
        if (status === 'done') {
          break;
        }
        continue;
      }

      if (line.startsWith(':')) {
        continue;
      }

      if (line.startsWith('data:')) {
        const dataLine = line.slice(5).trim();
        if (dataLine === '[DONE]') {
          flushEvent();
          return { fullText, finalEvent: lastEvent };
        }
        eventBuffer += dataLine;
      }
    }
  }

  if (buffer) {
    const status = flushEvent();
    if (status === 'done') {
      return { fullText, finalEvent: lastEvent };
    }
  }

  return { fullText, finalEvent: lastEvent };
};


