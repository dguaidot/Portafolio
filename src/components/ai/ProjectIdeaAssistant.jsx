import React, { useState } from 'react';
import { Send, Loader2, Lightbulb, Rocket } from 'lucide-react';
import { callGemini } from '../../utils/gemini';
import { Button, Input } from '../ui';

const ProjectIdeaAssistant = () => {
  const [description, setDescription] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description.trim()) return;

    setIsLoading(true);
    setResponse('');

    try {
      const response = await callGemini({
        contents: [
          {
            parts: [
              {
                text: `Eres un experto en desarrollo de software y generación de ideas de proyectos. Analiza esta descripción y genera ideas de proyectos:

Descripción: ${description}

Por favor proporciona:
1. 3-5 ideas de proyectos específicos y viables
2. Stack tecnológico recomendado para cada proyecto
3. Características principales y funcionalidades
4. Nivel de dificultad y tiempo estimado
5. Consejos para la implementación
6. Posibles mejoras futuras

Responde en español y sé creativo pero realista.`,
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
        <Lightbulb className="w-5 h-5" />
        <h3 className="font-semibold">Generador de Ideas de Proyectos</h3>
      </div>
      
      <p className="text-sm text-main-600 dark:text-main-300">
        Describe lo que te interesa y obtén ideas de proyectos personalizadas con stack tecnológico.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Ej: Quiero hacer algo con IA, una app de productividad, un juego..."
          className="min-h-[80px] resize-none"
          multiline
        />
        
        <Button 
          type="submit" 
          disabled={isLoading || !description.trim()}
          className="w-full"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Generando...
            </>
          ) : (
            <>
              <Rocket className="w-4 h-4 mr-2" />
              Generar Ideas
            </>
          )}
        </Button>
      </form>

      {response && (
        <div className="mt-4 p-4 bg-light-100 dark:bg-main-700 rounded-lg border border-light-200 dark:border-main-600">
          <h4 className="font-semibold text-main-800 dark:text-main-200 mb-2">Ideas de Proyectos:</h4>
          <div className="text-sm text-main-700 dark:text-main-300 whitespace-pre-wrap">
            {response}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectIdeaAssistant;
