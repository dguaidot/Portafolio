# Paleta de Colores del Tema

Este documento describe la paleta de colores utilizada en el portafolio, definida en `tailwind.config.js`.

## Colores Principales

### Main (Azul Oscuro)
- **Uso**: Fondo principal, elementos base, estructura general
- **Colores**:
  - `main-50`: #f8fafc (muy claro)
  - `main-100`: #f1f5f9
  - `main-200`: #e2e8f0
  - `main-300`: #cbd5e1
  - `main-400`: #94a3b8
  - `main-500`: #64748b (base)
  - `main-600`: #475569
  - `main-700`: #334155
  - `main-800`: #1e293b
  - `main-900`: #0f172a (muy oscuro - fondo principal)

### Light (Blancos Suaves)
- **Uso**: Fondos en modo claro, alternancia entre secciones
- **Colores**:
  - `light-50`: #fefefe (blanco puro suave)
  - `light-100`: #fafafa (blanco cálido)
  - `light-200`: #f5f5f5 (gris muy claro cálido)
  - `light-300`: #e5e5e5 (gris claro cálido)
  - `light-400`: #d4d4d4 (gris medio cálido)
  - `light-500`: #a3a3a3 (gris cálido)
  - `light-600`: #737373 (gris oscuro cálido)
  - `light-700`: #525252 (gris muy oscuro)
  - `light-800`: #404040 (casi negro)
  - `light-900`: #262626 (negro suave)

### Primary (Azul)
- **Uso**: Elementos principales, enlaces, botones primarios, acentos
- **Colores**:
  - `primary-50`: #f0f9ff (muy claro)
  - `primary-100`: #e0f2fe
  - `primary-200`: #bae6fd
  - `primary-300`: #7dd3fc
  - `primary-400`: #38bdf8
  - `primary-500`: #0ea5e9 (base)
  - `primary-600`: #0284c7 (principal)
  - `primary-700`: #0369a1
  - `primary-800`: #075985
  - `primary-900`: #0c4a6e (muy oscuro)

### Secondary (Gris)
- **Uso**: Fondos, textos, bordes, elementos secundarios
- **Colores**:
  - `secondary-50`: #f8fafc (muy claro)
  - `secondary-100`: #f1f5f9
  - `secondary-200`: #e2e8f0
  - `secondary-300`: #cbd5e1
  - `secondary-400`: #94a3b8
  - `secondary-500`: #64748b (base)
  - `secondary-600`: #475569
  - `secondary-700`: #334155
  - `secondary-800`: #1e293b
  - `secondary-900`: #0f172a (muy oscuro)

### Accent (Amarillo/Naranja)
- **Uso**: Elementos de advertencia, estados especiales, highlights
- **Colores**:
  - `accent-50`: #fefce8 (muy claro)
  - `accent-100`: #fef3c7
  - `accent-200`: #fde68a
  - `accent-300`: #fcd34d
  - `accent-400`: #fbbf24
  - `accent-500`: #f59e0b (base)
  - `accent-600`: #d97706
  - `accent-700`: #b45309
  - `accent-800`: #92400e
  - `accent-900`: #78350f (muy oscuro)

## Uso en Componentes

### Botones
- **Primary**: `bg-primary-600 hover:bg-primary-700`
- **Secondary**: `bg-secondary-200 hover:bg-secondary-300`
- **Outline**: `border-primary-600 text-primary-600`

### Textos
- **Títulos**: `text-secondary-800 dark:text-secondary-100`
- **Subtítulos**: `text-secondary-700 dark:text-secondary-200`
- **Párrafos**: `text-secondary-600 dark:text-secondary-300`
- **Enlaces**: `text-primary-600 hover:text-primary-700`

### Fondos
- **Principal**: `bg-light-50 dark:bg-main-900`
- **Secciones Alternadas**: 
  - Skills: `bg-light-100 dark:bg-main-800`
  - Experience: `bg-light-50 dark:bg-main-900`
  - Projects: `bg-light-200 dark:bg-main-800`
  - Education: `bg-light-100 dark:bg-main-800`
  - Footer: `bg-light-300 dark:bg-main-800`
- **Cards**: `bg-light-50 dark:bg-main-700/50`

### Bordes
- **Generales**: `border-secondary-200 dark:border-secondary-700`
- **Acentos**: `border-primary-200 dark:border-primary-800`

## Modo Oscuro

Todos los colores tienen variantes para modo oscuro usando el prefijo `dark:`:
- Los fondos claros se vuelven oscuros
- Los textos oscuros se vuelven claros
- Los colores primarios mantienen su intensidad pero se ajustan para mejor contraste

## Consistencia

Para mantener la consistencia visual:
1. Usar siempre los colores del tema definidos
2. Evitar colores hardcodeados
3. Aplicar las variantes de modo oscuro correspondientes
4. Mantener el contraste adecuado para accesibilidad
