import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme, className = '' }) => (
  <button
    onClick={toggleTheme}
    className={`relative p-2 rounded-full bg-light-200 dark:bg-main-700 text-light-600 dark:text-main-300 hover:bg-light-300 dark:hover:bg-main-600 transition-all duration-300 hover:scale-110 ${className}`}
    aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
    title={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
  >
    <div className="relative">
      {theme === 'dark' ? (
        <Sun size={20} className="text-yellow-500" />
      ) : (
        <Moon size={20} className="text-blue-600" />
      )}
    </div>
  </button>
);

export default ThemeToggle;
