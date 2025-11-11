import React, { useState } from 'react';
import { Send, Loader2, MessageSquare, Brain } from 'lucide-react';
import { Button, Input } from '../ui';

const TechnicalInterviewAssistant = () => {
  const [topic, setTopic] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setIsLoading(true);
    setResponse('');

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || 'AIzaSyCrMgLgOj3kOQAP1sZrqxE19y-ceH9heRs';
      console.log('TechnicalInterviewAssistant - API Key:', apiKey);
      
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Eres un experto en entrevistas técnicas de programación. Genera preguntas y respuestas para preparar una entrevista técnica sobre: ${topic}

Por favor proporciona:
1. 5 preguntas técnicas de nivel intermedio-avanzado
2. Respuestas detalladas y ejemplos de código
3. Preguntas de seguimiento que podrían hacer
4. Conceptos clave a repasar
5. Consejos para explicar las respuestas

Responde en español y sé específico con ejemplos prácticos.`
            }]
          }]
        })
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
        <MessageSquare className="w-5 h-5" />
        <h3 className="font-semibold">Asistente de Entrevista Técnica</h3>
      </div>
      
      <p className="text-sm text-main-600 dark:text-main-300">
        Practica para entrevistas técnicas. Escribe un tema y obtén preguntas y respuestas.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Ej: React hooks, JavaScript closures, Node.js async/await..."
          className="w-full"
        />
        
        <Button 
          type="submit" 
          disabled={isLoading || !topic.trim()}
          className="w-full"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Generando...
            </>
          ) : (
            <>
              <Brain className="w-4 h-4 mr-2" />
              Generar Preguntas
            </>
          )}
        </Button>
      </form>

      {response && (
        <div className="mt-4 p-4 bg-light-100 dark:bg-main-700 rounded-lg border border-light-200 dark:border-main-600">
          <h4 className="font-semibold text-main-800 dark:text-main-200 mb-2">Preguntas y Respuestas:</h4>
          <div className="text-sm text-main-700 dark:text-main-300 whitespace-pre-wrap">
            {response}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnicalInterviewAssistant;
