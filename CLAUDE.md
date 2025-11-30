# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Descripción del Proyecto

Este es un portfolio web estático construido con Astro 5, basado en la plantilla Codefolio. Es un sitio de portafolio personal que muestra proyectos de desarrollo de software, DevOps y proyectos personales.

## Comandos de Desarrollo

```bash
# Iniciar servidor de desarrollo (http://localhost:4321 por defecto)
npm run dev
# o
npm start

# Construir para producción (salida completamente estática)
npm run build

# Vista previa del build de producción
npm run preview
```

## Arquitectura del Proyecto

### Estructura de Componentes

- **Layout principal**: `src/layouts/Layout.astro` - Define estilos globales y estructura HTML base
- **Header**: `src/components/Header.astro` - Maneja metadatos, ViewTransitions de Astro y referencias a estilos
- **Sidebar**: `src/components/Sidebar.astro` - Navegación lateral con información del perfil y enlaces a secciones
- **Project**: `src/components/Project.astro` - Componente reutilizable para mostrar proyectos individuales con título, descripción y tecnologías

### Páginas

Todas las páginas siguen el patrón de importar Header y Sidebar, pasando el `selectedItem` apropiado al Sidebar para indicar la página activa:

- `src/pages/index.astro` - Página de inicio (selectedItem: "home")
- `src/pages/software-development.astro` - Proyectos de desarrollo de software
- `src/pages/devops.astro` - Proyectos de DevOps y Cloud
- `src/pages/personal-projects.astro` - Proyectos personales

### Scripts del Cliente

- `src/scripts/nav.js` - Maneja la funcionalidad del menú móvil/toggle de navegación. Exporta `setupNav()` que se integra con las View Transitions de Astro mediante eventos `astro:page-load` y `astro:before-swap` para limpiar event listeners correctamente.

### Estilos

Los estilos se manejan a través de:
- CSS global en `src/layouts/Layout.astro` (variables CSS, estilos base)
- Archivo CSS externo en `/public/assets/styles.css` referenciado en Header.astro

### View Transitions

El proyecto utiliza View Transitions de Astro para navegación SPA-like entre páginas. El componente Sidebar maneja correctamente la limpieza de event listeners durante las transiciones de página.

## Notas Importantes

- Este es un sitio completamente estático que puede ser desplegado en cualquier plataforma de hosting estático
- No hay routing del lado del servidor ni API routes
- Las imágenes y assets estáticos se encuentran en `/public/assets/`
- El proyecto usa TypeScript con la configuración base de Astro
