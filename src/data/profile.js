/**
 * ─────────────────────────────────────────────────────────────
 *  YOUR CONTENT LIVES HERE · TU CONTENIDO VA AQUÍ
 * ─────────────────────────────────────────────────────────────
 *  Every field with { en, es } is shown in the active language.
 *  Cada campo con { en, es } se muestra según el idioma activo.
 */

export const profile = {
  name: 'Kirber Pineda',
  githubUser: 'Kirber27',
  // The hero splits the role on " / " into two lines.
  role: {
    en: 'Senior Full Stack / Vue · React · TypeScript Developer',
    es: 'Desarrollador Full Stack Senior / Vue · React · TypeScript'
  },
  location: { en: 'Chile · Remote / Hybrid', es: 'Chile · Remoto / Híbrido' },
  available: true,
  headline: {
    en: 'I build web applications for the public sector, telecom and corporate clients — with Vue 3, TypeScript and Node.js, and AI built into my daily workflow.',
    es: 'Construyo aplicaciones web para el sector público, telecomunicaciones y clientes corporativos, con Vue 3, TypeScript y Node.js, y con IA integrada en mi flujo de trabajo diario.'
  },
  intro: {
    en: 'Systems Engineer and Full Stack Developer with 6+ years of experience in Chile, building web applications for the public sector (SII), telecommunications (Entel) and corporate clients. Specialist in Vue 3 (Composition API) and JavaScript/TypeScript, with backend experience in Node.js, NestJS and Spring Boot microservices.',
    es: 'Ingeniero de Sistemas y Desarrollador Full Stack con más de 6 años de experiencia en Chile, construyendo aplicaciones web para el sector público (SII), telecomunicaciones (Entel) y clientes corporativos. Especialista en Vue 3 (Composition API) y JavaScript/TypeScript, con experiencia en backend con Node.js, NestJS y microservicios Spring Boot.'
  },
  stats: [
    { value: '6+', label: { en: 'years building for the web', es: 'años desarrollando para la web' } },
    { value: '10+', label: { en: 'corporate projects managed in parallel', es: 'proyectos corporativos gestionados en paralelo' } },
    { value: '6', label: { en: 'developers coordinated under Scrum', es: 'desarrolladores coordinados bajo Scrum' } }
  ],
  links: {
    github: 'https://github.com/Kirber27',
    linkedin: 'https://www.linkedin.com/in/kirber-pineda',
    email: 'kirber.27@gmail.com',
    // Put your CV PDF in /public/cv.pdf and set this to '/cv.pdf' ('' hides the button)
    cv: ''
  }
}

export const about = {
  paragraphs: [
    {
      en: 'I use AI applied to development every day — Claude Code, GitHub Copilot, MCP servers and context engineering — to ship faster and raise code quality. I have coordinated Scrum teams and work directly with Product Owners and clients.',
      es: 'Uso a diario IA aplicada al desarrollo (Claude Code, GitHub Copilot, servidores MCP y context engineering) para acelerar entregas y mejorar la calidad del código. Tengo experiencia coordinando equipos Scrum y trabajando directamente con Product Owners y clientes.'
    },
    {
      en: 'I hold a degree in Systems Engineering (UNEXPO, Caracas, 2018) and I am currently taking a Diploma in Artificial Intelligence at INACAP (2026). Spanish is my native language; my English is intermediate, comfortable with technical documentation.',
      es: 'Soy Ingeniero de Sistemas (UNEXPO, Caracas, 2018) y actualmente curso un Diplomado en Inteligencia Artificial en INACAP (2026). Español nativo e inglés intermedio, con lectura fluida de documentación técnica.'
    }
  ],
  principles: [
    {
      title: { en: 'Reusable by design', es: 'Reutilizable desde el diseño' },
      text: {
        en: 'Standardised Vue components and SPAs that cut development time on every new project.',
        es: 'Componentes Vue y SPAs estandarizados que reducen el tiempo de desarrollo de cada nuevo proyecto.'
      }
    },
    {
      title: { en: 'AI-assisted, human-reviewed', es: 'Asistido por IA, revisado por personas' },
      text: {
        en: 'Claude Code, Copilot and MCP to move faster, with context engineering and careful review to keep quality high.',
        es: 'Claude Code, Copilot y MCP para avanzar más rápido, con context engineering y revisión cuidadosa para mantener la calidad.'
      }
    },
    {
      title: { en: 'Close to the business', es: 'Cerca del negocio' },
      text: {
        en: 'Working with Product Owners on backlog and priorities, with traceable delivery through Git and Jira.',
        es: 'Trabajo con Product Owners en el backlog y las prioridades, con entregas trazables mediante Git y Jira.'
      }
    }
  ]
}

/** Work experience, most recent first. */
export const experience = [
  {
    company: 'Sonda (SII project)',
    url: '',
    role: { en: 'Specialised Frontend Developer', es: 'Desarrollador Frontend Especializado' },
    period: { en: 'Aug 2025 — Present', es: 'Ago 2025 — Actualidad' },
    location: { en: 'Chile', es: 'Chile' },
    highlights: [
      {
        en: 'Build views for Chile’s Internal Revenue Service (SII) platforms with Vue 3, JavaScript, Sass and Bootstrap 5, as part of modernising high-impact public services.',
        es: 'Desarrollo vistas para plataformas del Servicio de Impuestos Internos (SII) con Vue 3, JavaScript, Sass y Bootstrap 5, como parte de la modernización de servicios de alto impacto ciudadano.'
      },
      {
        en: 'Develop Spring Boot microservices and integrate frontend and backend through REST APIs, across the full stack.',
        es: 'Desarrollo microservicios con Spring Boot e integro frontend y backend mediante APIs REST, participando en el ciclo full stack del proyecto.'
      },
      {
        en: 'Brought Claude Code, GitHub Copilot and MCP servers into the development workflow, applying context engineering to speed up delivery and raise code quality.',
        es: 'Incorporé Claude Code, GitHub Copilot y servidores MCP al flujo de desarrollo, aplicando context engineering para acelerar las entregas y elevar la calidad del código.'
      },
      {
        en: 'Ensure traceability and version control on every delivery with Git, GitLab, Bitbucket and Jira.',
        es: 'Aseguro trazabilidad y control de versiones en cada entrega con Git, GitLab, Bitbucket y Jira.'
      }
    ],
    stack: ['Vue 3', 'JavaScript', 'Sass', 'Bootstrap 5', 'Spring Boot', 'REST APIs', 'Claude Code', 'MCP']
  },
  {
    company: 'Entel',
    url: '',
    role: { en: 'Frontend Consultant', es: 'Consultor Frontend' },
    period: { en: 'May 2022 — Jan 2025', es: 'May 2022 — Ene 2025' },
    location: { en: 'Chile', es: 'Chile' },
    highlights: [
      {
        en: 'Managed 10+ corporate client projects in parallel: migrations and implementations in Vue 3 (Composition API) on Modyo 11, resolving requirements and incidents and reducing the team’s response times.',
        es: 'Gestioné en paralelo más de 10 proyectos de clientes corporativos: migraciones e implementaciones en Vue 3 (Composition API) sobre Modyo 11, resolviendo requerimientos e incidentes y reduciendo los tiempos de respuesta del equipo.'
      },
      {
        en: 'Standardised reusable components for Vue.js SPAs, cutting development time for new projects in high-demand environments.',
        es: 'Estandaricé componentes reutilizables para SPAs en Vue.js, lo que redujo los tiempos de desarrollo de nuevos proyectos en entornos de alta demanda.'
      },
      {
        en: 'Supported the Product Owner with planning and backlog management in Jira, coordinating a team of 6 developers under Scrum and improving sprint efficiency.',
        es: 'Apoyé al Product Owner en la planificación y gestión del backlog en Jira, coordinando un equipo de 6 desarrolladores bajo Scrum y mejorando la eficiencia de los sprints.'
      },
      {
        en: 'Coordinated with business and technology teams to ensure delivery quality and compliance with client standards.',
        es: 'Coordiné con equipos de negocio y tecnología para asegurar la calidad de las entregas y el cumplimiento de los estándares del cliente.'
      }
    ],
    stack: ['Vue 3', 'React', 'Modyo 11', 'JavaScript', 'Jira', 'Scrum']
  },
  {
    company: 'Digital Beat (Entel projects)',
    url: '',
    role: { en: 'Frontend Developer', es: 'Desarrollador Frontend' },
    period: { en: 'Jul 2021 — Apr 2022', es: 'Jul 2021 — Abr 2022' },
    location: { en: 'Chile', es: 'Chile' },
    highlights: [
      {
        en: 'Built responsive, high-performance views with HTML5, CSS3, Sass, JavaScript, jQuery and Bootstrap 5.',
        es: 'Desarrollé vistas responsivas y de alto rendimiento con HTML5, CSS3, Sass, JavaScript, jQuery y Bootstrap 5.'
      },
      {
        en: 'Worked with the Product Owner to prioritise requirements, aligning client needs with the delivered solutions.',
        es: 'Trabajé con el Product Owner en la priorización de requerimientos, alineando las necesidades del cliente con las soluciones entregadas.'
      }
    ],
    stack: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'jQuery', 'Bootstrap 5']
  },
]

/**
 * Featured projects (case studies). Pick 2–4 that best show your level.
 * `repo` / `demo` are optional. The live GitHub section below lists all public repos automatically.
 */
export const featuredProjects = [
  {
    title: 'kirber27.github.io',
    tag: { en: 'This site', es: 'Este sitio' },
    description: {
      en: 'Bilingual portfolio built with Vue 3 Composition API and Vite. Zero UI dependencies, custom i18n and theme composables, live GitHub data with caching, and automated deployment with GitHub Actions.',
      es: 'Portafolio hecho con Vue 3 Composition API y Vite. Sin dependencias de UI, composables propios de i18n y tema, datos de GitHub en vivo con caché y despliegue automático con GitHub Actions.'
    },
    highlights: [
      { en: '~40 kB gzipped JS', es: '~40 kB de JS gzip' },
      { en: 'WCAG-minded, reduced-motion aware', es: 'Accesible y respeta reduced-motion' },
      { en: 'Unit tested with Vitest', es: 'Tests unitarios con Vitest' }
    ],
    stack: ['Vue 3', 'Vite', 'Vitest', 'GitHub Actions'],
    repo: 'https://github.com/Kirber27/kirber27.github.io',
    demo: 'https://kirber27.github.io'
  }
]

export const skills = [
  {
    group: { en: 'Languages', es: 'Lenguajes' },
    items: ['JavaScript (ES6+)', 'TypeScript', 'Java', 'PHP', 'SQL']
  },
  {
    group: { en: 'Frontend', es: 'Frontend' },
    items: ['Vue 3 (Composition API)', 'React', 'Next.js', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS', 'Bootstrap 5', 'Material UI']
  },
  {
    group: { en: 'Backend', es: 'Backend' },
    items: ['Node.js', 'NestJS', 'Spring Boot', 'REST APIs', 'JWT', 'Postman']
  },
  {
    group: { en: 'Databases', es: 'Bases de datos' },
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB']
  },
  {
    group: { en: 'DevOps & Cloud', es: 'DevOps y Cloud' },
    items: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Docker', 'CI/CD', 'AWS (S3)']
  },
  {
    group: { en: 'AI for development', es: 'IA para desarrollo' },
    items: ['Claude Code', 'GitHub Copilot', 'ChatGPT', 'Claude Design', 'MCP', 'Prompting', 'Context engineering']
  },
  {
    group: { en: 'Management & design', es: 'Gestión y diseño' },
    items: ['Scrum', 'Jira', 'Figma', 'UI/UX', 'HubSpot (certified)']
  }
]
