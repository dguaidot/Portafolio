import React, { useState } from 'react';
import { Send, Loader2, Code, CheckCircle } from 'lucide-react';
import { callGemini } from '../../utils/gemini';
import { Button, Input } from '../ui';

const CodeReviewAssistant = () => {
  const [code, setCode] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code.trim()) return;

    setIsLoading(true);
    setResponse('');

    try {
      const response = await callGemini({
        contents: [
          {
            parts: [
              {
                text: `Eres un experto en code review. Analiza este código y proporciona una revisión detallada:

Código a revisar:
\`\`\`
${code}
\`\`\`

Por favor proporciona:
1. Problemas de calidad y buenas prácticas
2. Sugerencias de optimización
3. Posibles bugs o vulnerabilidades
4. Mejores prácticas a aplicar
5. Sugerencias de refactoring

Responde en español y sé específico con ejemplos de código mejorado.`,
              },
            ],
          },
        ],
      });

      const data = await response.json();
      
      if (!response.ok) {
        console.error('Error de API:', data);
        setResponse(`Error de API: ${data.error?.message || 'Error desconocido'}`);
        return;
      }
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
        setResponse(data.candidates[0].content.parts[0].text);
      } else {
        console.error('Estructura de respuesta inesperada:', data);
        setResponse('Error: La respuesta de la API no tiene el formato esperado.');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setResponse(`Error de conexión: ${error.message}. Verifica tu conexión a internet y la configuración de la API Key.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-primary-600 dark:text-primary-500">
        <Code className="w-5 h-5" />
        <h3 className="font-semibold">Asistente de Code Review</h3>
      </div>
      
      <p className="text-sm text-main-600 dark:text-main-300">
        Pega tu código y obtén una revisión detallada con sugerencias de mejora.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Pega aquí tu código..."
          className="min-h-[120px] resize-none font-mono text-sm"
          multiline
        />
        
        <Button 
          type="submit" 
          disabled={isLoading || !code.trim()}
          className="w-full"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Analizando...
            </>
          ) : (
            <>
              <CheckCircle className="w-4 h-4 mr-2" />
              Revisar Código
            </>
          )}
        </Button>
      </form>

      {response && (
        <div className="mt-4 p-4 bg-light-100 dark:bg-main-700 rounded-lg border border-light-200 dark:border-main-600">
          <h4 className="font-semibold text-main-800 dark:text-main-200 mb-2">Revisión del Código:</h4>
          <div className="text-sm text-main-700 dark:text-main-300 whitespace-pre-wrap">
            {response}
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeReviewAssistant;
