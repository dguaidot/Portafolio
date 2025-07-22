import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importa los estilos de Leaflet
import { Github, Linkedin, Mail, Briefcase, GraduationCap, ArrowDown, Sun, Moon, Send, MessageSquare, Copy, Loader, AlertCircle } from 'lucide-react';
import imageDavid from './assets/david.jpg'; // Asegúrate de tener una imagen de David Guaidot en la carpeta assets
// --- Iconos de Tecnologías (Componentes SVG) ---
const IconReact = () => (
  <svg viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-cyan-500"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
);
const IconNode = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-green-500"><path d="M19.34,13.53,12,21,4.66,13.53a8.34,8.34,0,0,1,1.11-11.5A8.34,8.34,0,0,1,18.23,2,8.34,8.34,0,0,1,19.34,13.53Z" fill="#8bc500"></path><path d="M15.1,12.42a3.83,3.83,0,0,0-6.19,0l-1.3,2.25.49.28,1.3-2.25a2.84,2.84,0,0,1,4.9,0l1.3,2.25.49-.28Z" fill="#fff"></path></svg>
);
const IconJS = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12"><path fill="#f7df1e" d="M0 0h24v24H0z"></path><path d="M11.3 12.8H9.5v3.7h-1.6v-3.7H6.2v-1.4h5.1v1.4zm4.2 2.3c0 .6-.1 1.1-.4 1.5-.3.4-.7.6-1.2.6-.5 0-1-.2-1.3-.6-.3-.4-.5-.9-.5-1.5V13c0-.6.1-1.1.4-1.5.3-.4.7-.6 1.3-.6s.9.2 1.2.5c.3.4.5.9.5 1.5v2.1zm-1.5-.1v-2c0-.3 0-.5-.1-.7s-.2-.3-.4-.3-.3.1-.4.3-.1.4-.1.7v2c0 .3 0 .5.1.7.1.2.2.3.4.3s.3-.1.4-.3c.1-.2.1-.4.1-.7z"></path></svg>
);
const IconPython = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12"><path fill="#3776ab" d="M12 24a12 12 0 1 1 12-12 12 12 0 0 1-12 12zm-3.3-6.8h2.3v-2.2c0-1.9 1.1-2.9 2.9-2.9h.1v2.2h-.1c-.8 0-1.1.4-1.1 1.1v1.8h1.7v-4.5c0-1.9 1.1-2.9 2.9-2.9h.1v2.2h-.1c-.8 0-1.1.4-1.1 1.1v1.2h-2.3v2.2c0 1.9-1.1 2.9-2.9 2.9h-.1v-2.2h.1c.8 0 1.1-.4 1.1-1.1v-1.8h-1.7v4.5c0 1.9-1.1 2.9-2.9 2.9h-.1v-2.2h.1c.8 0 1.1-.4 1.1-1.1v-1.2z"></path><path fill="#ffd43b" d="M12 0a12 12 0 0 0-3.3 23.2h2.3v-2.2c0-1.9-1.1-2.9-2.9-2.9h-.1v-2.2h.1c.8 0 1.1-.4 1.1-1.1v-1.8h1.7v4.5c0-1.9-1.1-2.9-2.9-2.9h-.1v-2.2h.1c.8 0 1.1-.4 1.1-1.1v-1.2h-2.3v-2.2c0-1.9 1.1-2.9 2.9-2.9h.1v2.2h-.1c-.8 0-1.1.4-1.1 1.1v1.8h1.7V4.7c0-1.9 1.1-2.9 2.9-2.9h.1V4h-.1c-.8 0-1.1.4-1.1 1.1v1.2h2.3V4.7c0-1.9-1.1-2.9-2.9-2.9h-.1V0h.1c1.8 0 2.9 1 2.9 2.9v4.5h1.7V6.2c0-1.9-1.1-2.9-2.9-2.9h-.1V0h.1c1.8 0 2.9 1 2.9 2.9v1.2h2.3V2.9c0-1.9-1.1-2.9-2.9-2.9h-.1V0A12 12 0 0 0 12 0z"></path></svg>
);

// --- Datos del Portafolio ---
const portfolioData = {
  personalInfo: {
    name: "David Guaidot",
    title: "Programador Full-Stack",
    location: "Caracas, Venezuela",
    coordinates: [10.359411955831746, -67.02864387952265],
    avatar: imageDavid, // Reemplaza esta URL con la tuya
    summary: "Programador dinámico con una base sólida en desarrollo Frontend utilizando React y TypeScript. Actualmente expandiendo mis habilidades hacia el Backend con Node.js y Django. Busco oportunidades para aplicar mis conocimientos en la creación de soluciones innovadoras y contribuir al éxito de proyectos desafiantes.",
    links: {
      github: "https://github.com/dguaidot",
      linkedin: "https://www.linkedin.com/in/david-guaidot-4002b4376/",
      email: "mailto:guaidot4206@gmail.com",
      whatsapp: "https://wa.me/584242736786",
      telegram: "https://t.me/dguaidot" // Asumiendo que tu username es dguaidot
    }
  },
  skills: [
    { name: 'React', icon: <IconReact /> },
    { name: 'Node.js', icon: <IconNode /> },
    { name: 'JavaScript', icon: <IconJS /> },
    { name: 'Python', icon: <IconPython /> },
  ],
  experience: [
    {
      title: "Desarrollador Frontend",
      company: "Total Aplicaciones",
      location: "Caracas, Venezuela",
      date: "Enero 2024 – Presente",
      description: [
        "Participación activa en el ciclo de vida completo del software, desde el mantenimiento hasta la creación de nuevos proyectos.",
        "Resolución de bugs, implementación de mejoras y desarrollo de requerimientos basados en las necesidades del cliente.",
        "Realización de integraciones clave con merchants de pago, bancos, impresoras fiscales y otras plataformas."
      ]
    }
  ],
  projects: [
    {
      title: "SimplitPOS",
      description: "Colaboré en el rediseño completo de la interfaz y experiencia del punto de venta (POS) para hacerlo más intuitivo y moderno, asegurando su funcionamiento en múltiples plataformas.",
      tags: ["React", "Capacitor"],
      link: "https://simplitpos.com/"
    },
    {
      title: "TotalChat",
      description: "Proyecto de automatización de mensajería que integra IA y las APIs de Meta para centralizar y gestionar comunicaciones de redes sociales desde una única aplicación.",
      tags: ["IA", "Node.js", "React"],
      status: "En Desarrollo"
    }
  ],
  education: {
    degree: "Estudiante de Informática (2º Año)",
    institution: "Universidad Politécnica Territorial de los Altos Mirandinos (UPTAMCA)"
  }
};

// --- Componentes ---
const ThemeToggle = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
    aria-label="Toggle dark mode"
  >
    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
  </button>
);

const Header = ({ onToggleTheme, theme }) => {
  const navLinks = [
    { href: "#skills", label: "Habilidades" },
    { href: "#experience", label: "Experiencia" },
    { href: "#projects", label: "Proyectos" },
    { href: "#location", label: "Ubicación" },
  ];

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-2xl font-bold text-sky-600 dark:text-sky-500">DG</a>
        <div className="flex items-center space-x-4">
            <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
                <li key={link.href}>
                <a href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-500 transition-colors duration-300">
                    {link.label}
                </a>
                </li>
            ))}
            </ul>
            <ThemeToggle theme={theme} toggleTheme={onToggleTheme} />
        </div>
      </nav>
    </header>
  );
};

const Hero = ({ data }) => {
    const handleScrollDown = () => {
        document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-10">
            <div className="container mx-auto px-6">
                <img src={data.avatar} alt="David Guaidot" className="w-64 h-64 rounded-full mx-auto mb-6 border-4 border-slate-200 dark:border-slate-700 shadow-lg"/>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-3">{data.name}</h1>
                <h2 className="text-2xl text-sky-600 dark:text-sky-500 font-medium mb-6">{data.title}</h2>
                <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 mb-8">{data.summary}</p>
                <div className="flex justify-center items-center space-x-4 text-slate-500 dark:text-slate-400">
                    <a href={data.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 dark:hover:text-sky-500 transition-colors duration-300 flex items-center gap-2"><Github size={20} /></a>
                    <a href={data.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 dark:hover:text-sky-500 transition-colors duration-300 flex items-center gap-2"><Linkedin size={20} /></a>
                    <a href={data.links.email} className="hover:text-sky-600 dark:hover:text-sky-500 transition-colors duration-300 flex items-center gap-2"><Mail size={20} /></a>
                    <a href={data.links.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300 flex items-center gap-2"><MessageSquare size={20} /></a>
                    <a href={data.links.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"><Send size={20} /></a>
                </div>
            </div>
            <button onClick={handleScrollDown} className="absolute bottom-10 animate-bounce">
                <ArrowDown size={24} className="text-sky-500" />
            </button>
        </section>
    );
};

const Skills = ({ skills }) => (
  <section id="skills" className="py-24 bg-white dark:bg-slate-800">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">Habilidades Técnicas</h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Estas son algunas de las tecnologías clave con las que trabajo. Pasa el mouse sobre ellas para verlas en acción.
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-8 md:gap-12">
        {skills.map(skill => (
          <div key={skill.name} className="flex flex-col items-center gap-2 text-center group">
            <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-full transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </div>
            <p className="font-semibold text-slate-700 dark:text-slate-200">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Experience = ({ experience, personalInfo }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [applicationDraft, setApplicationDraft] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [inputError, setInputError] = useState('');
  const [copied, setCopied] = useState(false);
  // Lee la API Key desde las variables de entorno de Vite
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const generateApplicationDraft = async () => {
    if (!jobTitle) {
      setInputError('Por favor, introduce un título de trabajo.');
      return;
    }
    if (!apiKey) {
      setInputError('La API Key de Gemini no está configurada. Sigue la guía para añadirla.');
      return;
    }
    setIsLoading(true);
    setApplicationDraft('');
    setInputError('');

    const prompt = `
      Basado en el siguiente perfil profesional, genera una carta de presentación corta y profesional para una posición de "${jobTitle}".

      Perfil Profesional:
      - Nombre: ${personalInfo.name}
      - Título: ${personalInfo.title}
      - Resumen: ${personalInfo.summary}
      - Experiencia: ${experience[0].title} en ${experience[0].company} (${experience[0].date}). Responsabilidades: ${experience[0].description.join(', ')}.

      La carta debe ser entusiasta, resaltar la experiencia relevante y mostrar interés en la posición de ${jobTitle}.
    `;

    try {
      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const result = await response.json();
      
      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setApplicationDraft(text);
      } else {
        console.error("Respuesta inesperada de la API:", result);
        setApplicationDraft("No se pudo generar el borrador. La respuesta de la API no fue la esperada.");
      }
    } catch (error) {
      console.error("Error llamando a la API de Gemini:", error);
      setApplicationDraft("Hubo un error al conectar con el servicio de IA. Revisa la consola para más detalles.");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCopy = () => {
    const el = document.createElement('textarea');
    el.value = applicationDraft;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">Experiencia Profesional</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-sky-200 dark:border-sky-800 pl-10">
            {experience.map((job, index) => (
              <div key={index} className="mb-12 relative">
                <div className="absolute -left-[49px] top-1.5 h-6 w-6 bg-sky-600 rounded-full border-4 border-slate-50 dark:border-slate-900 flex items-center justify-center">
                    <Briefcase size={12} className="text-white"/>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{job.date}</p>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{job.title}</h3>
                <p className="text-md text-slate-600 dark:text-slate-300 mb-3">{job.company} | {job.location}</p>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                  {job.description.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Asistente de Aplicación de Empleo</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              ¿Quieres aplicar a un nuevo trabajo? Introduce el título del puesto y deja que la IA genere un borrador de carta de presentación para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-2">
              <input 
                type="text"
                value={jobTitle}
                onChange={(e) => { setJobTitle(e.target.value); setInputError(''); }}
                placeholder="Ej: Desarrollador React Senior"
                className="flex-grow p-2 rounded-md bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
              <button 
                onClick={generateApplicationDraft}
                disabled={isLoading}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700 transition-colors disabled:bg-sky-400 disabled:cursor-not-allowed"
              >
                {isLoading ? <Loader className="animate-spin" /> : '✨'}
                {isLoading ? 'Generando...' : 'Generar Borrador'}
              </button>
            </div>
            {inputError && 
              <p className="text-red-500 text-sm flex items-center gap-2"><AlertCircle size={16}/>{inputError}</p>
            }
            {applicationDraft && (
              <div className="mt-6 p-4 bg-white dark:bg-slate-700 rounded-md relative">
                <button onClick={handleCopy} className="absolute top-2 right-2 p-1.5 bg-slate-200 dark:bg-slate-600 rounded-md hover:bg-slate-300 dark:hover:bg-slate-500">
                  <Copy size={16} />
                </button>
                <p className="text-slate-700 dark:text-slate-200 whitespace-pre-wrap">{applicationDraft}</p>
                {copied && <span className="absolute bottom-2 right-2 text-xs text-green-500">¡Copiado!</span>}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = ({ projects }) => (
  <section id="projects" className="py-24 bg-white dark:bg-slate-800">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">Proyectos Destacados</h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Estos son algunos de los proyectos más significativos en los que he trabajado.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6 flex flex-col hover:shadow-lg dark:hover:shadow-sky-900/50 transition-shadow duration-300">
            <div className="flex-grow">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">{project.title}</h3>
                {project.status && <span className="text-xs font-semibold text-amber-600 bg-amber-100 dark:text-amber-300 dark:bg-amber-900/50 px-2 py-1 rounded-full mb-3 inline-block">{project.status}</span>}
                <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-medium text-sky-800 bg-sky-100 dark:text-sky-300 dark:bg-sky-900/50 px-2.5 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-sky-600 dark:text-sky-500 hover:underline mt-auto">Ver Proyecto &rarr;</a>}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LocationMap = ({ location, coordinates }) => (
    <section id="location" className="py-24">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">Mi Ubicación</h2>
                <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">{location}</p>
            </div>
            <div className="h-96 w-full max-w-5xl mx-auto rounded-lg shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                <MapContainer center={coordinates} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={coordinates}>
                        <Popup>
                            ¡Aquí es donde la magia sucede! <br /> Caracas, Venezuela.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    </section>
);

const Education = ({ education }) => (
  <section id="education" className="py-24 text-center bg-white dark:bg-slate-800">
    <div className="container mx-auto px-6">
      <GraduationCap size={40} className="mx-auto text-sky-500 mb-4"/>
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">Educación</h2>
      <p className="text-xl font-semibold text-slate-700 dark:text-slate-200">{education.degree}</p>
      <p className="text-md text-slate-600 dark:text-slate-300">{education.institution}</p>
    </div>
  </section>
);

const Footer = ({ links }) => (
  <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
    <div className="container mx-auto px-6 py-8 text-center text-slate-600 dark:text-slate-400">
      <div className="flex justify-center items-center space-x-6 mb-4">
        <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-600 dark:hover:text-sky-500 transition-colors duration-300"><Github size={24} /></a>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-600 dark:hover:text-sky-500 transition-colors duration-300"><Linkedin size={24} /></a>
        <a href={links.email} className="text-slate-500 hover:text-sky-600 dark:hover:text-sky-500 transition-colors duration-300"><Mail size={24} /></a>
        <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300"><MessageSquare size={24} /></a>
        <a href={links.telegram} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"><Send size={24} /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} David Guaidot. Diseñado y desarrollado con dedicación.</p>
    </div>
  </footer>
);

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Si no hay tema guardado, usa la preferencia del sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 font-sans text-slate-700 dark:text-slate-200 transition-colors duration-300">
      <Header onToggleTheme={handleToggleTheme} theme={theme} />
      <main>
        <Hero data={portfolioData.personalInfo} />
        <Skills skills={portfolioData.skills} />
        <Experience experience={portfolioData.experience} personalInfo={portfolioData.personalInfo} />
        <Projects projects={portfolioData.projects} />
        <LocationMap location={portfolioData.personalInfo.location} coordinates={portfolioData.personalInfo.coordinates} />
        <Education education={portfolioData.education} />
      </main>
      <Footer links={portfolioData.personalInfo.links} />
    </div>
  );
}
