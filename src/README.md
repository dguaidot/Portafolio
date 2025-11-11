# Estructura del Proyecto - Portafolio

Este proyecto ha sido reorganizado siguiendo el principio de responsabilidad única y utilizando componentes reutilizables.

## Estructura de Carpetas

```
src/
├── components/
│   ├── ui/                 # Componentes de interfaz básicos
│   │   ├── Button.jsx      # Botón reutilizable con variantes
│   │   ├── Card.jsx        # Tarjeta reutilizable
│   │   ├── Input.jsx       # Campo de entrada reutilizable
│   │   ├── ThemeToggle.jsx # Toggle de tema
│   │   └── index.js        # Exportaciones de componentes UI
│   ├── sections/           # Componentes de sección
│   │   ├── Header.jsx      # Encabezado con navegación
│   │   ├── Hero.jsx        # Sección principal
│   │   ├── Skills.jsx      # Habilidades técnicas
│   │   ├── Experience.jsx  # Experiencia profesional
│   │   ├── Projects.jsx    # Proyectos destacados
│   │   ├── LocationMap.jsx # Mapa de ubicación
│   │   ├── Education.jsx   # Educación
│   │   ├── Footer.jsx      # Pie de página
│   │   └── index.js        # Exportaciones de secciones
│   └── icons/              # Iconos personalizados
│       └── TechnologyIcons.jsx # Iconos de tecnologías
├── hooks/                  # Hooks personalizados
│   ├── useTheme.js         # Hook para manejo de tema
│   ├── useScrollTo.js      # Hook para scroll suave
│   ├── useCopyToClipboard.js # Hook para copiar al portapapeles
│   └── index.js            # Exportaciones de hooks
├── data/                   # Datos del portafolio
│   └── portfolioData.js    # Información del portafolio
├── utils/                  # Utilidades (futuro)
├── assets/                 # Recursos estáticos
├── App.jsx                 # Componente principal
├── App.css                 # Estilos específicos de App
└── index.css               # Estilos globales (Tailwind)
```

## Principios Aplicados

### 1. Responsabilidad Única
- Cada componente tiene una sola responsabilidad
- Los datos están separados de la lógica de presentación
- Los hooks encapsulan lógica reutilizable

### 2. Componentes Reutilizables
- **UI Components**: Button, Card, Input, ThemeToggle
- **Section Components**: Cada sección del portafolio es un componente independiente
- **Icon Components**: Iconos de tecnologías reutilizables

### 3. Hooks Personalizados
- `useTheme`: Manejo del tema claro/oscuro
- `useScrollTo`: Navegación suave entre secciones
- `useCopyToClipboard`: Funcionalidad de copia al portapapeles

### 4. Separación de Datos
- Los datos del portafolio están en `src/data/portfolioData.js`
- Fácil de mantener y actualizar

## Beneficios de la Nueva Estructura

1. **Mantenibilidad**: Cada componente es independiente y fácil de modificar
2. **Reutilización**: Los componentes UI pueden usarse en otros proyectos
3. **Escalabilidad**: Fácil agregar nuevas secciones o funcionalidades
4. **Legibilidad**: Código más limpio y organizado
5. **Testing**: Cada componente puede ser probado independientemente
6. **Consistencia Visual**: Sistema de colores centralizado en el tema de Tailwind

## Sistema de Colores

El proyecto utiliza un sistema de colores centralizado definido en `tailwind.config.js`:

- **Main**: Azul Oscuro (#0f172a) - Para fondo principal y elementos base
- **Primary**: Azul (#0ea5e9) - Para elementos principales y enlaces
- **Secondary**: Gris (#64748b) - Para fondos, textos y elementos secundarios  
- **Accent**: Amarillo/Naranja (#f59e0b) - Para elementos de advertencia y highlights

Todos los componentes utilizan estos colores del tema para mantener consistencia visual y facilitar cambios globales.

## Uso de Componentes

### Componentes UI
```jsx
import { Button, Card, Input } from './components/ui';

// Botón con diferentes variantes
<Button variant="primary" size="lg">Click me</Button>
<Button variant="outline" loading={true}>Loading...</Button>

// Tarjeta con hover
<Card hover padding="lg">Contenido</Card>

// Input con validación
<Input 
  value={value} 
  onChange={setValue}
  error="Campo requerido"
  placeholder="Ingresa tu texto"
/>
```

### Hooks Personalizados
```jsx
import { useTheme, useScrollTo, useCopyToClipboard } from './hooks';

// Tema
const { theme, toggleTheme } = useTheme();

// Scroll suave
const { scrollToElement, handleScroll } = useScrollTo();

// Copiar al portapapeles
const { copied, copyToClipboard } = useCopyToClipboard();
```

## Futuras Mejoras

1. **Testing**: Agregar tests unitarios para cada componente
2. **Storybook**: Documentación interactiva de componentes
3. **TypeScript**: Migración a TypeScript para mejor tipado
4. **Animaciones**: Agregar animaciones con Framer Motion
5. **PWA**: Convertir en Progressive Web App
