import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme, className = '' }) => {
  const handleToggle = event => {
    if (typeof document === 'undefined') {
      toggleTheme();
      return;
    }

    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const maxX = Math.max(x, window.innerWidth - x);
    const maxY = Math.max(y, window.innerHeight - y);
    const endRadius = Math.hypot(maxX, maxY);

    if (typeof document.startViewTransition !== 'function') {
      toggleTheme();
      return;
    }

    const transition = document.startViewTransition(() => {
      toggleTheme();
    });

    transition.ready.then(() => {
      const opening = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];
      const closing = [...opening].reverse();
      const duration = 600;
      const animationSettings = {
        duration,
        easing: 'ease-in-out',
        fill: 'both'
      };

      document.documentElement.animate(
        { clipPath: opening },
        { ...animationSettings, pseudoElement: '::view-transition-new(root)' }
      );

      document.documentElement.animate(
        { clipPath: closing },
        { ...animationSettings, pseudoElement: '::view-transition-old(root)' }
      );
    });
  };

  return (
    <button
      onClick={handleToggle}
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
};

export default ThemeToggle;
