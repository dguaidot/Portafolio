import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = ({ education }) => (
  <section id="education" className="py-24 text-center bg-light-100 dark:bg-main-800">
    <div className="container mx-auto px-6">
      <GraduationCap size={40} className="mx-auto text-primary-500 mb-4"/>
      <h2 className="text-3xl font-bold text-main-800 dark:text-main-100 mb-2">
        Educación
      </h2>
      <p className="text-xl font-semibold text-main-700 dark:text-main-200">
        {education.degree}
      </p>
      <p className="text-md text-main-600 dark:text-main-300">
        {education.institution}
      </p>
    </div>
  </section>
);

export default Education;
