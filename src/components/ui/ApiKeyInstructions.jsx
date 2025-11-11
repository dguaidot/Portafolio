import React from 'react';
import { AlertCircle, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const ApiKeyInstructions = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
            Configuración de API Key Requerida
          </h4>
          <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-3">
            Para usar los asistentes de IA, necesitas configurar tu API Key de Gemini:
          </p>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-medium text-yellow-800 dark:text-yellow-200">1.</span>
              <span className="text-yellow-700 dark:text-yellow-300">
                Ve a <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Google AI Studio</a> y crea una API Key
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="font-medium text-yellow-800 dark:text-yellow-200">2.</span>
              <span className="text-yellow-700 dark:text-yellow-300">
                Crea un archivo <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">.env</code> en la raíz del proyecto
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="font-medium text-yellow-800 dark:text-yellow-200">3.</span>
              <span className="text-yellow-700 dark:text-yellow-300">
                Agrega esta línea al archivo:
              </span>
            </div>
            
            <div className="bg-yellow-100 dark:bg-yellow-800 p-2 rounded border border-yellow-200 dark:border-yellow-700">
              <div className="flex items-center justify-between">
                <code className="text-yellow-800 dark:text-yellow-200">
                  AIzaSyCrMgLgOj3kOQAP1sZrqxE19y-ceH9heRs=tu_api_key_aqui
                </code>
                <button
                  onClick={() => copyToClipboard('AIzaSyCrMgLgOj3kOQAP1sZrqxE19y-ceH9heRs=tu_api_key_aqui')}
                  className="ml-2 p-1 hover:bg-yellow-200 dark:hover:bg-yellow-700 rounded"
                  title="Copiar"
                >
                  {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="font-medium text-yellow-800 dark:text-yellow-200">4.</span>
              <span className="text-yellow-700 dark:text-yellow-300">
                Reinicia el servidor de desarrollo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyInstructions;
