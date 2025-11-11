import React from 'react';
import { Briefcase, Award, Code, Users, Calendar, MapPin } from 'lucide-react';

const Experience = ({ experience }) => {

  return (
    <section id="experience" className="py-24 bg-light-50 dark:bg-main-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-main-800 dark:text-main-100 mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-main-600 dark:text-main-300 max-w-2xl mx-auto">
            Mi trayectoria profesional incluye experiencia en desarrollo web, integración de sistemas y trabajo en equipo.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary-200 dark:border-primary-800 pl-10">
            {experience.map((job, index) => (
              <div key={index} className="mb-16 relative">
                <div className="absolute -left-[49px] top-1.5 h-6 w-6 bg-primary-600 rounded-full border-4 border-light-50 dark:border-main-900 flex items-center justify-center">
                  <Briefcase size={12} className="text-white"/>
                </div>
                
                {/* Información básica del trabajo */}
                <div className="mb-4">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-primary-600 bg-primary-100 dark:bg-primary-900/50 px-2 py-1 rounded-full">
                      {job.type}
                    </span>
                    <span className="text-sm text-main-500 dark:text-main-400 flex items-center gap-1">
                      <Calendar size={14} />
                      {job.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-main-800 dark:text-main-100 mb-2">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-main-600 dark:text-main-300 mb-4">
                    <span className="flex items-center gap-1">
                      <Briefcase size={16} />
                      {job.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={16} />
                      {job.location}
                    </span>
                  </div>
                </div>

                {/* Logros destacados */}
                {job.achievements && job.achievements.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-main-800 dark:text-main-100 mb-3 flex items-center gap-2">
                      <Award size={18} className="text-primary-600" />
                      Logros Destacados
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-main-600 dark:text-main-300">
                          <span className="text-primary-500 mt-1">•</span>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tecnologías utilizadas */}
                {job.technologies && job.technologies.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-main-800 dark:text-main-100 mb-3 flex items-center gap-2">
                      <Code size={18} className="text-primary-600" />
                      Tecnologías
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, i) => (
                        <span key={i} className="text-xs font-medium text-primary-800 bg-primary-100 dark:text-primary-300 dark:bg-primary-900/50 px-2.5 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Responsabilidades */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-main-800 dark:text-main-100 mb-3 flex items-center gap-2">
                    <Users size={18} className="text-primary-600" />
                    Responsabilidades
                  </h4>
                  <ul className="list-disc list-inside text-main-600 dark:text-main-300 space-y-2">
                    {job.description.map((point, i) => (
                      <li key={i} className="text-sm">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
