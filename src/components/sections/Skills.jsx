import React from 'react';
import { TechnologyIcon } from '../icons/TechnologyIcons';

const Skills = ({ skills }) => (
  <section id="skills" className="py-24 bg-light-100 dark:bg-main-800">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-main-800 dark:text-main-100 mb-4">
          Habilidades Técnicas
        </h2>
        <p className="text-main-600 dark:text-main-300 max-w-2xl mx-auto">
          Estas son algunas de las tecnologías clave con las que trabajo. Pasa el mouse sobre ellas para verlas en acción.
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-8 md:gap-12">
        {skills.map(skill => (
          <div key={skill.name} className="flex flex-col items-center gap-2 text-center group">
            <div className="p-4 bg-main-100 dark:bg-main-700 rounded-full transition-transform duration-300 group-hover:scale-110 shadow-md">
              <TechnologyIcon name={skill.icon} />
            </div>
            <p className="font-semibold text-main-700 dark:text-main-200">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
