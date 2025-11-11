import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Accordion = ({ 
  title, 
  children, 
  defaultOpen = false, 
  className = "",
  icon: Icon = null 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border border-light-300 dark:border-main-600 rounded-lg overflow-hidden ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-light-100 dark:bg-main-700 hover:bg-light-200 dark:hover:bg-main-600 transition-colors duration-200 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="w-5 h-5 text-primary-600 dark:text-primary-500" />}
          <span className="font-medium text-main-800 dark:text-main-200">{title}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-main-600 dark:text-main-300" />
        ) : (
          <ChevronDown className="w-5 h-5 text-main-600 dark:text-main-300" />
        )}
      </button>
      
      {isOpen && (
        <div className="px-4 py-4 bg-light-50 dark:bg-main-800 border-t border-light-200 dark:border-main-600">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
