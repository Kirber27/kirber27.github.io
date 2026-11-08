/**
 * ─────────────────────────────────────────────────────────────
 *  YOUR CONTENT LIVES HERE · TU CONTENIDO VA AQUÍ
 * ─────────────────────────────────────────────────────────────
 *  Every field with { en, es } is shown in the active language.
 *  Cada campo con { en, es } se muestra según el idioma activo.
 *
 *  Search for "TODO" and replace with your real information.
 *  Busca "TODO" y reemplázalo con tu información real.
 */

export const profile = {
  // TODO: your full name / tu nombre completo
  name: 'Kirber',
  githubUser: 'Kirber27',
  role: {
    en: 'Senior Frontend / JavaScript Developer',
    es: 'Senior Frontend / JavaScript Developer'
  },
  // TODO: city, country
  location: { en: 'Santiago, Chile · Remote', es: 'Santiago, Chile · Remoto' },
  available: true,
  headline: {
    en: 'I build fast, accessible web products that scale — and the frontend architecture that keeps teams shipping.',
    es: 'Construyo productos web rápidos y accesibles que escalan, y la arquitectura frontend que permite a los equipos seguir entregando.'
  },
  intro: {
    en: 'JavaScript specialist focused on Vue, React and TypeScript. I care about performance budgets, design systems, clean component APIs and developer experience.',
    es: 'Especialista en JavaScript con foco en Vue, React y TypeScript. Me importan los presupuestos de rendimiento, los design systems, las APIs de componentes limpias y la experiencia de desarrollo.'
  },
  // TODO: adjust numbers / ajusta los números
  stats: [
    { value: '8+', label: { en: 'years writing JavaScript', es: 'años escribiendo JavaScript' } },
    { value: '30+', label: { en: 'production releases', es: 'releases en producción' } },
    { value: '95+', label: { en: 'Lighthouse perf target', es: 'meta de Lighthouse perf' } }
  ],
  links: {
    github: 'https://github.com/Kirber27',
    // TODO: your LinkedIn URL / tu URL de LinkedIn ('' to hide)
    linkedin: '',
    // TODO: your email / tu correo
    email: 'kjpr.2904@gmail.com',
    // TODO: put your CV PDF in /public/cv.pdf ('' to hide the button)
    cv: ''
  }
}

export const about = {
  paragraphs: [
    {
      en: 'I am a frontend engineer who enjoys turning complex business requirements into interfaces that feel simple. Over the years I have moved from building screens to owning the architecture behind them: state management, component libraries, testing strategy and CI pipelines.',
      es: 'Soy ingeniero frontend y disfruto transformar requerimientos de negocio complejos en interfaces que se sienten simples. Con los años pasé de construir pantallas a ser responsable de la arquitectura detrás de ellas: manejo de estado, librerías de componentes, estrategia de testing y pipelines de CI.'
    },
    {
      en: 'I work best in product teams where I can mentor other developers, review code with care, and collaborate closely with design and backend to ship measurable improvements.',
      es: 'Trabajo mejor en equipos de producto donde puedo guiar a otros desarrolladores, revisar código con cuidado y colaborar de cerca con diseño y backend para entregar mejoras medibles.'
    }
  ],
  principles: [
    {
      title: { en: 'Performance is a feature', es: 'El rendimiento es una feature' },
      text: {
        en: 'Code-splitting, lazy hydration and real-user metrics (Core Web Vitals) from day one.',
        es: 'Code-splitting, carga diferida y métricas reales de usuario (Core Web Vitals) desde el primer día.'
      }
    },
    {
      title: { en: 'Accessible by default', es: 'Accesible por defecto' },
      text: {
        en: 'Semantic HTML, keyboard navigation and WCAG 2.2 AA as a baseline, not an afterthought.',
        es: 'HTML semántico, navegación por teclado y WCAG 2.2 AA como base, no como un extra.'
      }
    },
    {
      title: { en: 'Boring, testable code', es: 'Código predecible y testeable' },
      text: {
        en: 'Small composables, typed contracts and tests that document behaviour.',
        es: 'Composables pequeños, contratos tipados y tests que documentan el comportamiento.'
      }
    }
  ]
}

/**
 * TODO: replace with your real experience (most recent first).
 * TODO: reemplaza con tu experiencia real (la más reciente primero).
 * Tip: start each highlight with a verb and include a number.
 * Consejo: empieza cada logro con un verbo e incluye una cifra.
 */
export const experience = [
  {
    company: 'Company / Empresa',
    url: '',
    role: { en: 'Senior Frontend Developer', es: 'Senior Frontend Developer' },
    period: { en: '2022 — Present', es: '2022 — Actualidad' },
    location: { en: 'Remote', es: 'Remoto' },
    highlights: [
      {
        en: 'Led the migration of a legacy SPA to Vue 3 + Vite + TypeScript, cutting build times by 70%.',
        es: 'Lideré la migración de una SPA legacy a Vue 3 + Vite + TypeScript, reduciendo los tiempos de build en un 70%.'
      },
      {
        en: 'Designed a shared component library used by 4 product teams, with visual regression tests.',
        es: 'Diseñé una librería de componentes compartida usada por 4 equipos de producto, con tests de regresión visual.'
      },
      {
        en: 'Improved LCP from 4.1s to 1.8s through route-level code-splitting and image optimisation.',
        es: 'Mejoré el LCP de 4,1 s a 1,8 s mediante code-splitting por ruta y optimización de imágenes.'
      }
    ],
    stack: ['Vue 3', 'TypeScript', 'Pinia', 'Vite', 'Vitest', 'Playwright']
  },
  {
    company: 'Company / Empresa',
    url: '',
    role: { en: 'Frontend Developer', es: 'Frontend Developer' },
    period: { en: '2019 — 2022', es: '2019 — 2022' },
    location: { en: 'Santiago, Chile', es: 'Santiago, Chile' },
    highlights: [
      {
        en: 'Built customer-facing dashboards in React consuming REST and GraphQL APIs.',
        es: 'Desarrollé dashboards para clientes en React consumiendo APIs REST y GraphQL.'
      },
      {
        en: 'Introduced unit and E2E testing in CI, raising coverage from 10% to 75%.',
        es: 'Introduje tests unitarios y E2E en CI, subiendo la cobertura del 10% al 75%.'
      },
      {
        en: 'Mentored 3 junior developers through code reviews and pair programming.',
        es: 'Guié a 3 desarrolladores junior mediante code reviews y pair programming.'
      }
    ],
    stack: ['React', 'JavaScript', 'GraphQL', 'Jest', 'Sass']
  },
  {
    company: 'Company / Empresa',
    url: '',
    role: { en: 'Web Developer', es: 'Desarrollador Web' },
    period: { en: '2016 — 2019', es: '2016 — 2019' },
    location: { en: 'Santiago, Chile', es: 'Santiago, Chile' },
    highlights: [
      {
        en: 'Delivered responsive websites and internal tools with JavaScript, jQuery and Node.js.',
        es: 'Entregué sitios responsivos y herramientas internas con JavaScript, jQuery y Node.js.'
      }
    ],
    stack: ['JavaScript', 'Node.js', 'HTML', 'CSS']
  }
]

/**
 * Featured projects (case studies). Pick 2–4 that best show your level.
 * Proyectos destacados (casos de estudio). Elige 2–4 que muestren tu nivel.
 * `repo` / `demo` are optional. The live GitHub section below lists all public repos automatically.
 */
export const featuredProjects = [
  {
    title: 'kirber27.github.io',
    tag: { en: 'This site', es: 'Este sitio' },
    description: {
      en: 'Bilingual portfolio built with Vue 3 Composition API and Vite. Zero UI dependencies, custom i18n and theme composables, live GitHub data with caching, and automated deployment with GitHub Actions.',
      es: 'Portafolio bilingüe hecho con Vue 3 Composition API y Vite. Sin dependencias de UI, composables propios de i18n y tema, datos de GitHub en vivo con caché y despliegue automático con GitHub Actions.'
    },
    highlights: [
      { en: '~40 kB gzipped JS', es: '~40 kB de JS gzip' },
      { en: 'WCAG-minded, reduced-motion aware', es: 'Accesible y respeta reduced-motion' },
      { en: 'Unit tested with Vitest', es: 'Tests unitarios con Vitest' }
    ],
    stack: ['Vue 3', 'Vite', 'Vitest', 'GitHub Actions'],
    repo: 'https://github.com/Kirber27/kirber27.github.io',
    demo: 'https://kirber27.github.io'
  },
  {
    // TODO: replace with a real project / reemplaza con un proyecto real
    title: 'Project name / Nombre del proyecto',
    tag: { en: 'Case study', es: 'Caso de estudio' },
    description: {
      en: 'Problem → what you built → measurable result. E.g. an admin dashboard with role-based access, virtualised tables for 50k rows and offline support.',
      es: 'Problema → qué construiste → resultado medible. Ej.: un panel de administración con acceso por roles, tablas virtualizadas para 50 mil filas y soporte offline.'
    },
    highlights: [
      { en: 'Virtualised lists', es: 'Listas virtualizadas' },
      { en: 'Role-based routing', es: 'Rutas por rol' }
    ],
    stack: ['Vue 3', 'TypeScript', 'Pinia'],
    repo: '',
    demo: ''
  }
]

export const skills = [
  {
    group: { en: 'Core', es: 'Núcleo' },
    items: ['JavaScript (ES2024)', 'TypeScript', 'HTML5', 'CSS3 / Sass', 'Web APIs']
  },
  {
    group: { en: 'Frameworks', es: 'Frameworks' },
    items: ['Vue 3', 'Nuxt', 'Pinia', 'React', 'Next.js']
  },
  {
    group: { en: 'Quality', es: 'Calidad' },
    items: ['Vitest', 'Jest', 'Testing Library', 'Playwright', 'ESLint', 'Storybook']
  },
  {
    group: { en: 'Tooling & delivery', es: 'Herramientas y entrega' },
    items: ['Vite', 'Webpack', 'Node.js', 'Git', 'GitHub Actions', 'Docker']
  },
  {
    group: { en: 'Practices', es: 'Prácticas' },
    items: ['Design systems', 'Web performance', 'Accessibility (WCAG)', 'Code review', 'Mentoring', 'Agile / Scrum']
  }
]
