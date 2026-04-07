CONTEXT_PROJECT.md: Professional Portfolio 2026
1. Visión General
Desarrollo de un portfolio web profesional para un Fullstack Web Developer con un año de experiencia. El objetivo es proyectar una imagen moderna, técnica y detallista, destacando la capacidad de resolver problemas reales y el dominio de tecnologías de vanguardia.

2. Stack Tecnológico (Core)
Framework: Astro (Arquitectura de Islas para máxima performance).

Lenguaje: TypeScript / JavaScript (React 19).

Estilos: Tailwind CSS (Utility-first, purga de CSS, diseño responsive).

Animaciones: Framer Motion (Interacciones premium y micro-animaciones).

Iconografía: Lucide React (Minimalista y consistente).

Deployment: Vercel o Netlify.

3. Guía de Estilo (Design System)
Paleta de Colores (Dark Mode Primary)
Background: #0F172A (Slate 900)

Surface/Cards: #1E293B (Slate 800)

Primary Accent: #38BDF8 (Sky 400) - Botones y Call to Action.

Secondary Accent: #818CF8 (Indigo 400) - Degradados y detalles.

Text High: #F8FAFC (Slate 50)

Text Low: #94A3B8 (Slate 400)

Tipografía
Sans (Cuerpo/Títulos): Inter o Geist.

Mono (Terminal/Código): JetBrains Mono o Fira Code.

4. Estructura de Secciones
Navbar (Fixed): Enlace a secciones, logo minimalista y botón de descarga de CV. Efecto glassmorphism (backdrop-blur).

Hero Section: * Avatar con borde degradado animado.

Efecto Typewriter con > Hello There.

Nombre con gradiente de texto.

Subtítulo: "Fullstack Web Developer".

About Me: Texto humano centrado en la resolución de problemas y aprendizaje continuo.

Experience (Timeline): Hilo vertical visual que conecta hitos del último año, destacando logros técnicos e impacto en lugar de solo tareas.

Projects Showcase: * Cards con efecto hover de Motion (elevación y brillo).

Estructura: Reto técnico -> Solución -> Stack utilizado.

Skills: Grid organizado por categorías (Frontend, Backend, Tools).

Contact: Botón mailto: directo e iconos de redes sociales (LinkedIn/GitHub). Sin formulario para evitar spam.

5. Requerimientos Funcionales y UX
Mobile-first SIEMPRE: Diseñar y maquetar primero para pantallas pequeñas, luego escalar a tablet/desktop (enfoque min-width).

Internacionalización UX: Incluir un botón visible para alternar el contenido entre español e inglés (ES/EN), conservando accesibilidad y consistencia visual.

Performance: Score de 100/100 en Google Lighthouse.

View Transitions: Navegación suave entre rutas nativa de Astro.

Micro-interacciones: Feedback visual al interactuar con botones y tarjetas.

Accesibilidad: Soporte para lectores de pantalla, contraste adecuado y respeto a la preferencia de prefers-reduced-motion.

SEO: Metatags configurados, OpenGraph images y carga rápida de imágenes (WebP/AVIF).

6. Instrucciones de Implementación (Reglas de Oro)
Calidad > Cantidad: Solo los 3 mejores proyectos.

Código Limpio: Usar componentes reutilizables en la carpeta /components.

Islands Architecture: Solo hidratar componentes que necesiten interactividad (client:visible o client:load).

Copywriting: Tono profesional, directo y tecnológico. Evitar clichés.