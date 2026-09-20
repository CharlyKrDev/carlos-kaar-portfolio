import type { TranslationDictionary } from "./translations";

export const es: TranslationDictionary = {
  hero: {
    greeting: "Hola, soy",
    description:
      "Desarrollador backend enfocado en construir APIs confiables, integraciones de datos y sistemas del lado del servidor mantenibles con Node.js, Express y PostgreSQL.",
    viewProjects: "Ver proyectos",
    downloadCv: "Descargar CV",
  },
  navigation: {
    projects: "Proyectos",
    about: "Sobre mí",
    skills: "Habilidades",
    certifications: "Certificaciones",
    contact: "Contacto",
    menu: "Menú",
    close: "Cerrar",
  },
  projects: {
    label: "Proyectos",
    title: "Trabajos seleccionados",
    sectionDescription:
      "Una selección de sistemas backend, APIs y proyectos en producción enfocados en confiabilidad, integración de datos y arquitectura mantenible.",

    visibility: {
      private: "Privado",
      public: "Público",
    },

    status: {
      "in-development": "En desarrollo",
      production: "En producción",
      completed: "Completado",
    },

    actions: {
      repository: "Repositorio",
      liveSite: "Proyecto online",
      technicalOverview: "Descripción técnica",
    },

    items: {
      betty: {
        description:
          "Sistema backend modular para análisis de mercados financieros y señales de trading, con testing automatizado e integraciones de datos externos.",
      },

      "ecommerce-api": {
        description:
          "API REST modular para gestionar productos, usuarios y datos de la aplicación con una arquitectura backend mantenible.",
      },

      "centro-neurologia": {
        description:
          "Sitio web en producción desarrollado para un centro médico de neurología, enfocado en rendimiento, accesibilidad y SEO técnico.",
      },
    },
  },
  about: {
    label: "Sobre_mí",
    title: "Sobre mí",
    intro: "De operaciones a sistemas backend.",
    headline:
      "Pensamiento analítico, disciplina operativa y un enfoque práctico del desarrollo backend.",

    paragraphs: {
      background:
        "Trabajé durante casi 12 años en roles analíticos y operativos en Banco Galicia, donde la precisión, la trazabilidad y la confiabilidad de los procesos formaban parte del trabajo cotidiano.",

      present:
        "Hoy aplico esa misma mentalidad al desarrollo backend, construyendo APIs, integraciones de datos y sistemas mantenibles con Node.js, TypeScript y testing automatizado, mientras continúo profundizando mis conocimientos de ingeniería de software.",
    },

    traits: {
      analyticalThinking: "Pensamiento Analítico",
      processReliability: "Confiabilidad de Procesos",
      continuousLearning: "Aprendizaje Continuo",
      problemSolving: "Resolución de Problemas",
    },
  },
  skills: {
    label: "Habilidades",
    title: "Stack técnico",
    description:
      "Tecnologías y prácticas que utilizo para construir, probar y mantener sistemas backend.",
  },
  certifications: {
    label: "Certificaciones",
    title: "Formación y certificaciones",
    description:
      "Cursos y certificaciones que acompañan mi formación continua en ingeniería de software.",

    actions: {
      viewCredential: "Ver certificado",
    },
  },
  contact: {
    label: "Contacto",
    title: "Construyamos algo útil.",
    description:
      "Actualmente estoy abierto a oportunidades como Desarrollador Backend Junior / Trainee y a roles tecnológicos donde pueda seguir desarrollando experiencia profesional.",

    actions: {
      sendEmail: "Enviar email",
    },
  },
  common: {
    role: "Desarrollador Backend Junior",
  },
  systemPanel: {
    labels: {
      location: "Ubicación",
      role: "Rol",
      status: "Estado",
    },

    location: "Piacenza, Italia",
    status: "Abierto a oportunidades",
  },
  accessibility: {
    mainNavigation: "Navegación principal",
    mobileNavigation: "Navegación móvil",
    languageSelector: "Selector de idioma",
    developerProfileSummary: "Resumen del perfil del desarrollador",
    homeLink: "Carlos Kaar — Inicio",
  },
  consent: {
    title: "Analítica",
    description:
      "Este sitio utiliza Google Analytics únicamente con tu permiso para entender cómo se utiliza el portfolio. No se utilizan cookies publicitarias.",
    accept: "Aceptar analítica",
    reject: "Rechazar",
    settings: "Configurar analítica",
  },
  privacy: {
    label: "Privacidad",
    title: "Privacidad y analítica",
    description:
      "Este portfolio no utiliza cookies publicitarias ni de perfilado.",
    analyticsTitle: "Google Analytics",
    analyticsDescription:
      "Google Analytics 4 se utiliza para entender cómo interactúan los visitantes con el portfolio, como el uso de la página y determinadas acciones.",
    consentDescription:
      "La analítica se activa únicamente después de tu consentimiento. Puedes cambiar tu elección en cualquier momento desde Configurar analítica en el footer.",
    close: "Cerrar",
  },
};
