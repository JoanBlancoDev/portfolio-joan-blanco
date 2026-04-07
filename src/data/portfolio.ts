
type LocalizedText = {
  es: string;
  en: string;
};

export const education = {
  degree: 'Informática (TSU)', 
  institution: 'Instituto Tecnológico Antonio José de Sucre', 
  status: '2023 - Cursando' 
};
export const profile = {
  name: 'Joan Blanco', // [cite: 1]
  role: {
    es: 'Desarrollador Web Fullstack',
    en: 'Fullstack Web Developer',
  } as LocalizedText, // [cite: 2]
  location: 'Caracas, Venezuela', // [cite: 3]
  email: 'joanblanco.dev@gmail.com', // [cite: 4]
  github: 'https://github.com/JoanBlancoDev', // [cite: 7]
  linkedin: 'https://www.linkedin.com/in/joan-blanco-dev', // [cite: 6]
  summary: {
    es: `Desarrollador Fullstack con dominio avanzado de JavaScript/TypeScript y capacidad para gestionar el ciclo de vida completo de aplicaciones web y móviles. Especializado en la construcción de arquitecturas eficientes con Next.js, Node.js y bases de datos SQL/NoSQL. Mi virtud principal es la mentalidad orientada a resultados, permitiéndome lanzar MVPs funcionales de forma acelerada sin sacrificar la estabilidad del sistema.`,
    en: 'Fullstack developer with advanced proficiency in JavaScript/TypeScript and the ability to manage the entire lifecycle of web and mobile applications. Specialized in building efficient architectures with Next.js, Node.js, and SQL/NoSQL databases. My main virtue is a results-oriented mindset, allowing me to rapidly launch functional MVPs without sacrificing system stability.',
  } as LocalizedText, // [cite: 9]
  education
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
    stack: ['Next.js 15', 'React 19', 'Bun', 'Google AI', 'Supabase', 'Tailwind CSS'],
    link: 'https://echo-task-ia-75ui.vercel.app',
    github: 'https://github.com/JoanBlancoDev/echo-task-ia'
  },
  {
    title: {
      es: 'VIBES Backoffice',
      en: 'VIBES Backoffice',
    } as LocalizedText,
    tagline: {
      es: 'Panel administrativo para operaciones internas y control de datos.',
      en: 'Administrative panel for internal operations and data control.',
    } as LocalizedText,
    description: {
      es: 'Backoffice escalable con módulos administrativos, integración de API REST y mejoras de experiencia para equipos no técnicos.',
      en: 'Scalable backoffice with admin modules, REST API integration, and UX improvements for non-technical teams.',
    } as LocalizedText,
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'Postgres'],
    link: '#',
    github: '#'
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
    link: '#',
    github: 'https://github.com/JoanBlancoDev'
  }
];

export const experience = [
  {
    company: 'UX Verse Studio', // [cite: 13]
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
        'Liderazgo técnico en la arquitectura del frontend y su integración con servicios externos.'
      ],
      en: [
        'End-to-end data flow ownership from backend to UI, improving backoffice performance.',
        'Implementation of optimized data-fetching solutions to improve system efficiency.',
        'Technical leadership in frontend architecture and integration with external services.'
      ],
    } as { es: string[]; en: string[]; }
  },
  {
    company: 'VIBES VZLA', // [cite: 18]
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
        'Implementación de pruebas automatizadas E2E con Playwright, reduciendo errores en producción.'
      ],
      en: [
        'Design and implementation of robust modules under REST architecture using Node.js and Express.',
        'Backoffice development and iterative maintenance with Next.js, optimizing admin UX.',
        'Implementation of automated E2E tests with Playwright, reducing production errors.'
      ],
    } as { es: string[]; en: string[]; }
  }
];

export const skills = {
  frontend: [
    'React.js', 'Next.js', 'React Native', 'TypeScript', // [cite: 25]
    'Tailwind CSS', 'Astro', 'Motion' //
  ],
  backend: [
    'Node.js', 'Express', 'MongoDB', 'Postgres', 'Prisma' // [cite: 25]
  ],
  tools: [
    'Git', 'Tanstack Query', 'Playwright', 'Jest', 'Figma' // [cite: 26, 27]
  ]
};