/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: {
          50: '#f8fafc',   // Blanco muy suave
          100: '#f1f5f9',  // Blanco suave
          200: '#e2e8f0',  // Gris muy claro
          300: '#cbd5e1',  // Gris claro
          400: '#94a3b8',  // Gris medio
          500: '#64748b',  // Gris
          600: '#475569',  // Gris oscuro
          700: '#334155',  // Azul gris oscuro
          800: '#1e293b',  // Azul muy oscuro
          900: '#0f172a',  // Azul extremadamente oscuro
        },
        light: {
          50: '#fefefe',   // Blanco puro suave
          100: '#dcdcdc',  // Blanco cálido
          200: '#f5f5f5',  // Gris muy claro cálido
          300: '#e5e5e5',  // Gris claro cálido
          400: '#d4d4d4',  // Gris medio cálido
          500: '#a3a3a3',  // Gris cálido
          600: '#737373',  // Gris oscuro cálido
          700: '#525252',  // Gris muy oscuro
          800: '#404040',  // Casi negro
          900: '#262626',  // Negro suave
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fefce8',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}