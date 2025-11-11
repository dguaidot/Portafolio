# Sistema de Temas

Este documento describe el sistema de temas implementado en el portafolio, que permite cambiar entre modo claro y oscuro.

## Funcionalidades

### 🔄 **Cambio de Tema**
- **Toggle Button**: Botón en el header para cambiar entre modos
- **Indicador Visual**: Muestra el tema actual (Modo Claro/Oscuro)
- **Persistencia**: El tema se guarda en localStorage
- **Detección Automática**: Usa la preferencia del sistema si no hay tema guardado

### 🎨 **Colores Adaptativos**

#### Modo Claro
- **Fondo Principal**: Blanco (`bg-white`)
- **Fondo Secciones**: Gris muy claro (`bg-main-50`)
- **Texto Principal**: Azul oscuro (`text-main-800`)
- **Texto Secundario**: Gris medio (`text-main-600`)
- **Acentos**: Azul primario (`text-primary-600`)

#### Modo Oscuro
- **Fondo Principal**: Azul muy oscuro (`bg-main-900`)
- **Fondo Secciones**: Azul oscuro (`bg-main-800`)
- **Texto Principal**: Blanco (`text-main-100`)
- **Texto Secundario**: Gris claro (`text-main-300`)
- **Acentos**: Azul claro (`text-primary-500`)

## Componentes del Sistema

### useTheme Hook
```jsx
import { useTheme } from './hooks';

const { theme, toggleTheme } = useTheme();
// theme: 'light' | 'dark'
// toggleTheme: función para cambiar tema
```

### ThemeToggle Component
```jsx
import { ThemeToggle } from './components/ui';

<ThemeToggle theme={theme} toggleTheme={toggleTheme} />
```

### ThemeIndicator Component
```jsx
import { ThemeIndicator } from './components/ui';

<ThemeIndicator theme={theme} />
```

## Implementación Técnica

### 1. **Hook useTheme**
- Maneja el estado del tema
- Persiste en localStorage
- Detecta preferencia del sistema
- Aplica clases CSS al documento

### 2. **Clases CSS Condicionales**
```jsx
// Ejemplo de uso
<div className="bg-white dark:bg-main-900 text-main-800 dark:text-main-100">
  Contenido que se adapta al tema
</div>
```

### 3. **Transiciones Suaves**
```jsx
// Transición automática entre temas
<div className="transition-colors duration-300">
  Contenido con transición suave
</div>
```

## Beneficios

1. **Accesibilidad**: Mejor contraste y legibilidad
2. **Preferencias del Usuario**: Respeta la configuración del sistema
3. **Experiencia Consistente**: El tema se mantiene entre sesiones
4. **Rendimiento**: Cambio instantáneo sin recarga
5. **UX Mejorada**: Indicadores visuales claros del estado actual

## Uso en Componentes

### Componentes UI
Todos los componentes UI soportan automáticamente ambos temas:
- **Button**: Variantes que se adaptan al tema
- **Card**: Fondos y bordes adaptativos
- **Input**: Estados visuales para ambos temas
- **ThemeToggle**: Botón optimizado para cambio de tema

### Componentes de Sección
Cada sección del portafolio se adapta automáticamente:
- **Header**: Fondo y navegación adaptativos
- **Hero**: Colores de texto y fondo adaptativos
- **Skills**: Iconos y fondos adaptativos
- **Experience**: Timeline y contenido adaptativos
- **Projects**: Cards y enlaces adaptativos
- **Education**: Iconos y texto adaptativos
- **Footer**: Enlaces y fondo adaptativos

## Personalización

Para agregar nuevos elementos que soporten temas:

1. **Usar clases condicionales**:
```jsx
<div className="bg-white dark:bg-main-900 text-main-800 dark:text-main-100">
```

2. **Aplicar transiciones**:
```jsx
<div className="transition-colors duration-300">
```

3. **Mantener consistencia**:
- Usar colores del tema definido
- Aplicar las mismas variantes de color
- Incluir estados hover y focus
