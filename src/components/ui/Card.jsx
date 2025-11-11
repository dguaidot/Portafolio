import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  padding = 'default',
  ...props 
}) => {
  const baseClasses = 'bg-light-50 dark:bg-main-700/50 border border-light-200 dark:border-main-700 rounded-lg shadow-sm';
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8'
  };
  
  const hoverClasses = hover 
    ? 'hover:shadow-lg dark:hover:shadow-primary-900/50 transition-shadow duration-300' 
    : '';
  
  const classes = `${baseClasses} ${paddingClasses[padding]} ${hoverClasses} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
