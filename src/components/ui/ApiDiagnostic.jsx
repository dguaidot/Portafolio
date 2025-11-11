import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import Button from './Button';

const ApiDiagnostic = () => {
  const [diagnostic, setDiagnostic] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const runDiagnostic = async () => {
    setIsLoading(true);
    setDiagnostic(null);

    const results = {
      apiKey: !!import.meta.env.VITE_GEMINI_API_KEY,
      apiKeyLength: import.meta.env.VITE_GEMINI_API_KEY?.length || 0,
      environment: import.meta.env.MODE,
      timestamp: new Date().toISOString()
    };

    // Test de conectividad básica
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || 'AIzaSyCrMgLgOj3kOQAP1sZrqxE19y-ceH9heRs';
      console.log('ApiDiagnostic - API Key:', apiKey);
        const testResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: "Responde solo con 'OK' si puedes leer esto."
            }]
          }]
        })
      });

      results.connectivity = testResponse.ok;
      results.status = testResponse.status;
      
      if (testResponse.ok) {
        const data = await testResponse.json();
        results.apiResponse = data;
      } else {
        const errorData = await testResponse.json();
        results.apiError = errorData;
      }
    } catch (error) {
      results.connectivity = false;
      results.error = error.message;
    }

    setDiagnostic(results);
    setIsLoading(false);
  };

  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
            Diagnóstico de API
          </h4>
          <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
            Ejecuta un diagnóstico para identificar problemas con la API de Gemini:
          </p>
          
          <Button 
            onClick={runDiagnostic}
            disabled={isLoading}
            className="mb-3"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Ejecutando diagnóstico...
              </>
            ) : (
              <>
                <AlertTriangle className="w-4 h-4 mr-2" />
                Ejecutar Diagnóstico
              </>
            )}
          </Button>

          {diagnostic && (
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                {diagnostic.apiKey ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-600" />
                )}
                <span className="text-blue-800 dark:text-blue-200">
                  API Key configurada: {diagnostic.apiKey ? 'Sí' : 'No'}
                </span>
              </div>
              
              {diagnostic.apiKey && (
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-blue-800 dark:text-blue-200">
                    Longitud de API Key: {diagnostic.apiKeyLength} caracteres
                  </span>
                </div>
              )}
              
              <div className="flex items-center gap-2">
                {diagnostic.connectivity ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-600" />
                )}
                <span className="text-blue-800 dark:text-blue-200">
                  Conectividad: {diagnostic.connectivity ? 'OK' : 'Error'}
                </span>
              </div>
              
              {diagnostic.status && (
                <div className="text-blue-800 dark:text-blue-200">
                  Status HTTP: {diagnostic.status}
                </div>
              )}
              
              {diagnostic.apiError && (
                <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded border border-red-200 dark:border-red-800">
                  <div className="text-red-800 dark:text-red-200 font-medium">Error de API:</div>
                  <pre className="text-xs text-red-700 dark:text-red-300 mt-1">
                    {JSON.stringify(diagnostic.apiError, null, 2)}
                  </pre>
                </div>
              )}
              
              {diagnostic.error && (
                <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded border border-red-200 dark:border-red-800">
                  <div className="text-red-800 dark:text-red-200 font-medium">Error de conexión:</div>
                  <div className="text-xs text-red-700 dark:text-red-300 mt-1">
                    {diagnostic.error}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApiDiagnostic;
