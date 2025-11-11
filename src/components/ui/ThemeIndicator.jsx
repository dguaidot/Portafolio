import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeIndicator = ({ theme, className = '' }) => (
  <div className={`flex items-center gap-2 text-sm ${className}`}>
    {theme === 'dark' ? (
      <>
        <Moon size={16} className="text-blue-500" />
        <span className="text-main-600 dark:text-main-300">Modo Oscuro</span>
      </>
    ) : (
      <>
        <Sun size={16} className="text-yellow-500" />
        <span className="text-main-600 dark:text-main-300">Modo Claro</span>
      </>
    )}
  </div>
);

export default ThemeIndicator;
