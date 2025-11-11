import React from 'react';
import { ThemeToggle, ThemeIndicator } from '../ui';
import { useScrollTo } from '../../hooks';

const Header = ({ onToggleTheme, theme }) => {
  const { handleScroll } = useScrollTo();
  
  const navLinks = [
    { href: "#skills", label: "Habilidades" },
    { href: "#experience", label: "Experiencia" },
    { href: "#projects", label: "Proyectos" },
    { href: "#location", label: "Ubicación" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-light-100/95 dark:bg-main-900/95 backdrop-blur-sm z-50 border-b border-light-200 dark:border-main-700">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, '#home')} 
          className="text-2xl font-bold text-primary-600 dark:text-primary-500"
        >
          DG
        </a>
        <div className="flex items-center space-x-4">
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  onClick={(e) => handleScroll(e, link.href)} 
                  className="text-main-600 dark:text-main-300 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-3">
            <ThemeIndicator theme={theme} className="hidden sm:flex" />
            <ThemeToggle theme={theme} toggleTheme={onToggleTheme} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
