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
    role: "Junior Backend Developer",
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
};
