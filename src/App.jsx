import React from 'react';
import { portfolioData } from './data/portfolioData';
import { useTheme } from './hooks';
import {
  Header,
  Hero,
  SkillsEnhanced,
  Experience,
  Projects,
  LocationMap,
  Education,
  Footer
} from './components/sections';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-light-50 dark:bg-main-900 font-sans text-main-800 dark:text-main-100 transition-colors duration-300">
      <Header onToggleTheme={toggleTheme} theme={theme} />
      <main>
        <Hero data={portfolioData.personalInfo} />
        <SkillsEnhanced skills={portfolioData.skills} personalInfo={portfolioData.personalInfo} />
        <Experience experience={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <LocationMap location={portfolioData.personalInfo.location} coordinates={portfolioData.personalInfo.coordinates} />
        <Education education={portfolioData.education} />
      </main>
      <Footer links={portfolioData.personalInfo.links} />
    </div>
  );
}