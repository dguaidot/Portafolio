import React from 'react';
import { Card } from '../ui';

const Projects = ({ projects }) => (
  <section id="projects" className="py-24 bg-light-200 dark:bg-main-800">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-main-800 dark:text-main-100 mb-4">
          Proyectos Destacados
        </h2>
        <p className="text-main-600 dark:text-main-300 max-w-2xl mx-auto">
          Estos son algunos de los proyectos más significativos en los que he trabajado.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <Card key={index} hover className="flex flex-col">
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-main-800 dark:text-main-100 mb-2">
                {project.title}
              </h3>
              {project.status && (
                <span className="text-xs font-semibold text-amber-600 bg-amber-100 dark:text-amber-300 dark:bg-amber-900/50 px-2 py-1 rounded-full mb-3 inline-block">
                  {project.status}
                </span>
              )}
              <p className="text-main-600 dark:text-main-300 mb-4">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-xs font-medium text-primary-800 bg-primary-100 dark:text-primary-300 dark:bg-primary-900/50 px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-semibold text-primary-600 dark:text-primary-500 hover:underline mt-auto"
              >
                Ver Proyecto &rarr;
              </a>
            )}
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
