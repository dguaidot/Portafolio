import imageDavid from '../assets/david.jpg';

// --- Datos del Portafolio ---
export const portfolioData = {
  personalInfo: {
    name: "David Guaidot",
    title: "Programador Full-Stack",
    location: "Caracas, Venezuela",
    coordinates: [10.359411955831746, -67.02864387952265],
    avatar: imageDavid,
    summary: "Programador dinámico con una base sólida en desarrollo Frontend utilizando React y TypeScript. Actualmente expandiendo mis habilidades hacia el Backend con Node.js y Django. Busco oportunidades para aplicar mis conocimientos en la creación de soluciones innovadoras y contribuir al éxito de proyectos desafiantes.",
    links: {
      github: "https://github.com/dguaidot",
      linkedin: "https://www.linkedin.com/in/david-guaidot-19914338b/",
      email: "mailto:guaidot4206@gmail.com",
      whatsapp: "https://wa.me/584242736786",
      telegram: "https://t.me/dguaidot"
    }
  },
  skills: [
    { name: 'React', icon: 'react' },
    { name: 'Node.js', icon: 'node' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Python', icon: 'python' },
    { name: 'Java', icon: 'java' },
    { name: 'SQL Server', icon: 'sqlserver' },
    { name: 'MySQL', icon: 'mysql' },
  ],
  experience: [
    {
      title: "Desarrollador Frontend",
      company: "Total Aplicaciones",
      location: "Caracas, Venezuela",
      date: "Septiembre 2023 – Presente",
      type: "Tiempo Completo",
      achievements: [
        "Desarrollo actual del aplicativo SimplitChat, sistema de gestión de redes sociales para empresas con integración de IA",
        "Implementé integraciones con APIs de pago (PayPal, Stripe) aumentando las transacciones en un 40%",
        "Colaboré en el rediseño de SimplitPOS, mejorando la experiencia de usuario en un 60%",
        "Optimicé el rendimiento de aplicaciones, reduciendo los tiempos de carga en un 35%",
        "Trabajé con equipos ágiles utilizando metodologías Scrum y Kanban"
      ],
      technologies: ["React", "TypeScript", "JavaScript", "Node.js", "REST APIs", "Git", "IA", "APIs de Redes Sociales"],
      description: [
        "Desarrollo activo de SimplitChat: aplicativo de gestión de redes sociales para empresas de ventas con integración de Inteligencia Artificial.",
        "Gestión de mensajes de WhatsApp, Telegram e Instagram (próximamente Mercado Libre y TikTok) para automatizar la comunicación empresarial.",
        "Participación activa en el ciclo de vida completo del software, desde el mantenimiento hasta la creación de nuevos proyectos.",
        "Resolución de bugs, implementación de mejoras y desarrollo de requerimientos basados en las necesidades del cliente.",
        "Realización de integraciones clave con merchants de pago, bancos, impresoras fiscales y otras plataformas.",
        "Colaboración estrecha con diseñadores UX/UI para implementar interfaces intuitivas y responsivas.",
        "Mentoría a desarrolladores junior y participación en code reviews para mantener la calidad del código."
      ]
    },
    {
      title: "Desarrollador Freelance",
      company: "Proyectos Independientes",
      location: "Remoto",
      date: "Enero 2023 – Agosto 2023",
      type: "Freelance",
      achievements: [
        "Desarrollé un aplicativo completo para Protección Civil del estado Miranda, gestionando gran parte de sus operaciones administrativas y de campo",
        "Implementé sistema de gestión de emergencias y recursos humanos para ente público",
        "Creé 5+ aplicaciones web para clientes locales del sector privado",
        "Desarrollé sistemas de gestión administrativa y de inventario para empresas",
        "Optimicé bases de datos MySQL, mejorando consultas en un 50%"
      ],
      technologies: ["React", "Node.js", "MySQL", "MongoDB", "Express.js", "Bootstrap"],
      description: [
        "Desarrollo de aplicaciones web personalizadas para pequeñas y medianas empresas.",
        "Proyecto destacado: Sistema integral para Protección Civil Miranda, incluyendo gestión de emergencias, recursos humanos y operaciones administrativas.",
        "Implementación de sistemas de gestión administrativa y de inventario para el sector privado.",
        "Consultoría en tecnologías web y mejores prácticas de desarrollo.",
        "Mantenimiento y soporte técnico de aplicaciones en producción."
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
