import React from 'react';
import { Code, MessageSquare, Lightbulb, Briefcase, Brain, Rocket, CheckCircle } from 'lucide-react';
import Accordion from '../ui/Accordion';
import ApiKeyInstructions from '../ui/ApiKeyInstructions';
import ApiDiagnostic from '../ui/ApiDiagnostic';
import { TechnologyIcon } from '../icons/TechnologyIcons';
import { 
  JobApplicationAssistant, 
  CodeReviewAssistant, 
  TechnicalInterviewAssistant, 
  ProjectIdeaAssistant 
} from '../ai';
import { portfolioData } from '../../data/portfolioData';

const SkillsEnhanced = () => {
  return (
    <section className="py-16 bg-light-100 dark:bg-main-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-main-800 dark:text-main-100 mb-4">
            Habilidades y Asistentes de IA
          </h2>
          <p className="text-lg text-main-600 dark:text-main-300 max-w-2xl mx-auto">
            Explora mis habilidades técnicas y utiliza los asistentes de IA para mejorar tu desarrollo profesional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Skills Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-main-800 dark:text-main-100 mb-6">
              Habilidades Técnicas
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {portfolioData.skills?.map((skill, index) => (
                <div
                  key={index}
                  className="bg-main-100 dark:bg-main-700 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-2">
                    <TechnologyIcon name={skill.icon} className="w-8 h-8" />
                  </div>
                  <div className="font-medium text-main-700 dark:text-main-200 text-sm">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Assistants Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-main-800 dark:text-main-100 mb-6">
              Asistentes de IA
            </h3>
            <ApiDiagnostic />
            
            <div className="space-y-4">
              <Accordion 
                title="Asistente de Aplicación de Empleo" 
                icon={Briefcase}
                defaultOpen={true}
              >
                <JobApplicationAssistant />
              </Accordion>

              <Accordion 
                title="Asistente de Code Review" 
                icon={Code}
              >
                <CodeReviewAssistant />
              </Accordion>

              <Accordion 
                title="Asistente de Entrevista Técnica" 
                icon={MessageSquare}
              >
                <TechnicalInterviewAssistant />
              </Accordion>

              <Accordion 
                title="Generador de Ideas de Proyectos" 
                icon={Lightbulb}
              >
                <ProjectIdeaAssistant />
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsEnhanced;