import React, { useState } from 'react';
import { Send, Loader2, Briefcase, FileText } from 'lucide-react';
import { callGemini } from '../../utils/gemini';
import { Button, Input } from '../ui';

const JobApplicationAssistant = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!jobDescription.trim()) return;

    setIsLoading(true);
    setResponse('');

    try {
      const response = await callGemini({
        contents: [
          {
            parts: [
              {
                text: `Eres un asistente especializado en aplicaciones de empleo. Analiza esta descripción de trabajo y proporciona consejos específicos para aplicar exitosamente:

Descripción del trabajo: ${jobDescription}

Por favor proporciona:
1. Puntos clave para destacar en la aplicación
2. Habilidades específicas a mencionar
3. Cómo adaptar el CV/portafolio
4. Consejos para la entrevista
5. Preguntas inteligentes para hacer al empleador

Responde en español y sé específico y práctico.`,
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
        <Briefcase className="w-5 h-5" />
        <h3 className="font-semibold">Asistente de Aplicación de Empleo</h3>
      </div>
      
      <p className="text-sm text-main-600 dark:text-main-300">
        Pega la descripción de un trabajo y obtén consejos personalizados para aplicar exitosamente.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Pega aquí la descripción del trabajo..."
          className="min-h-[100px] resize-none"
          multiline
        />
        
        <Button 
          type="submit" 
          disabled={isLoading || !jobDescription.trim()}
          className="w-full"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Analizando...
            </>
          ) : (
            <>
              <FileText className="w-4 h-4 mr-2" />
              Obtener Consejos
            </>
          )}
        </Button>
      </form>

      {response && (
        <div className="mt-4 p-4 bg-light-100 dark:bg-main-700 rounded-lg border border-light-200 dark:border-main-600">
          <h4 className="font-semibold text-main-800 dark:text-main-200 mb-2">Consejos Personalizados:</h4>
          <div className="text-sm text-main-700 dark:text-main-300 whitespace-pre-wrap">
            {response}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobApplicationAssistant;
