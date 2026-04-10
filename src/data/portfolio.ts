type LocalizedText = {
  es: string;
  en: string;
};

export const profile = {
  role: {
    es: 'Desarrollador Web Fullstack',
    en: 'Fullstack Web Developer',
  } as LocalizedText,
  github: 'https://github.com/JoanBlancoDev',
  linkedin: 'https://www.linkedin.com/in/joan-blanco-dev',
  cv: 'https://drive.google.com/drive/folders/18c2GRHP_ylddoXspB9NkhmYrY9paDJhW',
  summary: {
    es: `Desarrollador Fullstack con dominio avanzado de JavaScript/TypeScript y capacidad para gestionar el ciclo de vida completo de aplicaciones web y móviles. Especializado en la construcción de arquitecturas eficientes con Next.js, Node.js y bases de datos SQL/NoSQL.\n\nMi virtud principal es la mentalidad orientada a resultados, permitiéndome lanzar MVPs funcionales de forma acelerada sin sacrificar la estabilidad del sistema.`,
    en: 'Fullstack developer with advanced proficiency in JavaScript/TypeScript and the ability to manage the entire lifecycle of web and mobile applications. Specialized in building efficient architectures with Next.js, Node.js, and SQL/NoSQL databases.\n\nMy main virtue is a results-oriented mindset, allowing me to rapidly launch functional MVPs without sacrificing system stability.',
  } as LocalizedText,
};

export const projects = [
  {
    title: {
      es: 'EchoTask AI',
      en: 'EchoTask AI',
    } as LocalizedText,
    tagline: {
      es: 'Micro-SaaS para gestión de tickets técnicos mediante voz.',
      en: 'Micro-SaaS for technical ticket management through voice.',
    } as LocalizedText,
    description: {
      es: 'Sistema que convierte notas de voz en tickets estructurados utilizando Google Generative AI (Gemini 2.5 Flash).',
      en: 'System that converts voice notes into structured tickets using Google Generative AI (Gemini 2.5 Flash).',
    } as LocalizedText,
    stack: ['Next.js 15', 'React 19', 'Bun', 'Google AI', 'Supabase', 'Tailwind CSS', 'Redis', 'Prisma'],
    link: 'https://echo-task-ia-75ui.vercel.app',
    github: 'https://github.com/JoanBlancoDev/echo-task-ia',
  },
  {
    title: {
      es: 'Loopstudios Landing Page',
      en: 'Loopstudios Landing Page',
    } as LocalizedText,
    tagline: {
      es: 'Interfaz interactiva moderna con diseño responsive riguroso.',
      en: 'Modern interactive interface with rigorous responsive design.',
    } as LocalizedText,
    description: {
      es: 'Desarrollo de una landing page premium enfocada en la fidelidad visual y rendimiento, implementando menús adaptativos y grids complejos.',
      en: 'Development of a premium landing page focused on visual fidelity and performance, implementing adaptive menus and complex grids.',
    } as LocalizedText,
    stack: ['Astro', 'CSS', 'GSAP', 'Mobile First'],
    link: 'https://loopstudios-landing-page-main-eight-rose.vercel.app/',
    github: 'https://github.com/JoanBlancoDev/loopstudios-landing-page-main',
  },
  {
    title: {
      es: 'Portfolio 2026',
      en: 'Portfolio 2026',
    } as LocalizedText,
    tagline: {
      es: 'Sitio personal de alto rendimiento con arquitectura de islas.',
      en: 'High-performance personal site with island architecture.',
    } as LocalizedText,
    description: {
      es: 'Portfolio profesional mobile-first con Astro, animaciones con Motion y componentes reutilizables orientados a performance y UX.',
      en: 'Professional mobile-first portfolio with Astro, Motion animations, and reusable components focused on performance and UX.',
    } as LocalizedText,
    stack: ['Astro', 'React 19', 'Motion', 'Tailwind CSS'],
    link: 'https://portfolio-joan-blanco.vercel.app/',
    github: 'https://github.com/JoanBlancoDev/portfolio-joan-blanco',
  },
  {
    title: {
      es: 'Rock & EDM Festival',
      en: 'Rock & EDM Festival',
    } as LocalizedText,
    tagline: {
      es: 'Landing page para eventos con enfoque en multimedia y optimización.',
      en: 'Event landing page with a focus on multimedia and optimization.',
    } as LocalizedText,
    description: {
      es: 'Sitio web dinámico para un festival de música que incluye galerías interactivas, gestión de horarios y optimización de assets multimedia.',
      en: 'Dynamic website for a music festival featuring interactive galleries, schedule management, and multimedia asset optimization.',
    } as LocalizedText,
    stack: ['SASS', 'JavaScript', 'Gulp', 'WebP Integration'],
    link: 'https://joanblancodev.github.io/festival-music-landing-page/',
    github: 'https://github.com/JoanBlancoDev/festival-music-landing-page',
  },
];
export const experience = [
  {
    company: 'UX Verse Studio',
    role: {
      es: 'Desarrollador Fullstack (Freelance)',
      en: 'Fullstack Developer (Freelance)',
    } as LocalizedText,
    period: {
      es: 'Abril 2025 - Actualidad',
      en: 'April 2025 - Present',
    } as LocalizedText,
    description: {
      es: [
        'Gestión integral del flujo de datos desde el backend hasta la interfaz de usuario, mejorando el rendimiento del backoffice.',
        'Implementación de soluciones de fetching de datos optimizadas para mejorar la eficiencia del sistema.',
        'Liderazgo técnico en la arquitectura del frontend y su integración con servicios externos.',
      ],
      en: [
        'End-to-end data flow ownership from backend to UI, improving backoffice performance.',
        'Implementation of optimized data-fetching solutions to improve system efficiency.',
        'Technical leadership in frontend architecture and integration with external services.',
      ],
    } as { es: string[]; en: string[] },
  },
  {
    company: 'VIBES VZLA',
    role: {
      es: 'Desarrollador Fullstack - QA',
      en: 'Fullstack Developer - QA',
    } as LocalizedText,
    period: {
      es: 'Oct 2025 - Ene 2026',
      en: 'Oct 2025 - Jan 2026',
    } as LocalizedText,
    description: {
      es: [
        'Diseño y construcción de módulos robustos bajo arquitectura REST utilizando Node.js y Express.',
        'Desarrollo y mantenimiento evolutivo del Backoffice con Next.js, optimizando la experiencia administrativa.',
        'Implementación de pruebas automatizadas E2E con Playwright, reduciendo errores en producción.',
      ],
      en: [
        'Design and implementation of robust modules under REST architecture using Node.js and Express.',
        'Backoffice development and iterative maintenance with Next.js, optimizing admin UX.',
        'Implementation of automated E2E tests with Playwright, reducing production errors.',
      ],
    } as { es: string[]; en: string[] },
  },
];

export const skills = {
  frontend: ['React.js', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS', 'Astro', 'Motion', 'GSAP'],
  backend: ['Node.js', 'Express','NestJS', 'MongoDB', 'Postgres', 'Prisma'],
  tools: ['Git', 'Tanstack Query', 'Playwright', 'Jest', 'Figma'],
};
