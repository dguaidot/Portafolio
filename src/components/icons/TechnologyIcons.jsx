// --- Iconos reales de tecnologías mediante Devicon ---
const iconMap = {
  react: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "Logo oficial de React",
  },
  node: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Logo oficial de Node.js",
  },
  javascript: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "Logo oficial de JavaScript",
  },
  typescript: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "Logo oficial de TypeScript",
  },
  python: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    alt: "Logo oficial de Python",
  },
  java: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    alt: "Logo oficial de Java",
  },
  sqlserver: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    alt: "Logo oficial de Microsoft SQL Server",
  },
  mysql: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    alt: "Logo oficial de MySQL",
  },
};

// Componente que renderiza el icono basado en el nombre
export const TechnologyIcon = ({ name, className = "w-12 h-12 object-contain" }) => {
  const icon = iconMap[name];

  if (!icon) {
    console.warn(`Icono no encontrado: ${name}`);
    return null;
  }

  return (
    <img
      src={icon.src}
      alt={icon.alt}
      className={className}
      loading="lazy"
      width={48}
      height={48}
    />
  );
};
