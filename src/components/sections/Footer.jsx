import React from 'react';
import { Github, Linkedin, Mail, MessageSquare, Send } from 'lucide-react';

const Footer = ({ links }) => (
  <footer className="bg-light-300 dark:bg-main-800 border-t border-light-400 dark:border-main-700">
    <div className="container mx-auto px-6 py-8 text-center text-main-600 dark:text-main-400">
      <div className="flex justify-center items-center space-x-6 mb-4">
        <a 
          href={links.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-main-500 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300"
        >
          <Github size={24} />
        </a>
        <a 
          href={links.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-main-500 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300"
        >
          <Linkedin size={24} />
        </a>
        <a 
          href={links.email} 
          className="text-main-500 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300"
        >
          <Mail size={24} />
        </a>
        <a 
          href={links.whatsapp} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-slate-500 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300"
        >
          <MessageSquare size={24} />
        </a>
        <a 
          href={links.telegram} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
        >
          <Send size={24} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} David Guaidot. Diseñado y desarrollado con dedicación.</p>
    </div>
  </footer>
);

export default Footer;
