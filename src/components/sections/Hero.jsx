import React from 'react';
import { Github, Linkedin, Mail, ArrowDown, MessageSquare, Send } from 'lucide-react';
import { useScrollTo } from '../../hooks';

const Hero = ({ data }) => {
  const { scrollToElement } = useScrollTo();
  
  const handleScrollDown = () => {
    scrollToElement('#skills');
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-10">
      <div className="container mx-auto px-6">
        <img 
          src={data.avatar} 
          alt="David Guaidot" 
          className="w-64 h-64 rounded-full mx-auto mb-6 border-4 border-main-200 dark:border-main-700 shadow-xl"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-main-800 dark:text-main-100 mb-3">
          {data.name}
        </h1>
        <h2 className="text-2xl text-primary-600 dark:text-primary-500 font-medium mb-6">
          {data.title}
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-main-600 dark:text-main-300 mb-8">
          {data.summary}
        </p>
        <div className="flex justify-center items-center space-x-4 text-main-500 dark:text-main-400">
          <a 
            href={data.links.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300 flex items-center gap-2"
          >
            <Github size={20} />
          </a>
          <a 
            href={data.links.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300 flex items-center gap-2"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href={data.links.email} 
            className="hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300 flex items-center gap-2"
          >
            <Mail size={20} />
          </a>
          <a 
            href={data.links.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300 flex items-center gap-2"
          >
            <MessageSquare size={20} />
          </a>
          <a 
            href={data.links.telegram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
          >
            <Send size={20} />
          </a>
        </div>
      </div>
      <button 
        onClick={handleScrollDown} 
        className="absolute bottom-10 animate-bounce"
        aria-label="Scroll to skills section"
      >
        <ArrowDown size={24} className="text-primary-500" />
      </button>
    </section>
  );
};

export default Hero;
