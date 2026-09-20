import type { TranslationDictionary } from "./translations";

export const it: TranslationDictionary = {
  hero: {
    greeting: "Ciao, sono",
    description:
      "Backend developer focalizzato sulla creazione di API affidabili, integrazioni di dati e sistemi server-side manutenibili con Node.js, Express e PostgreSQL.",
    viewProjects: "Vedi progetti",
    downloadCv: "Scarica CV",
  },
  navigation: {
    projects: "Progetti",
    about: "Chi sono",
    skills: "Competenze",
    certifications: "Certificazioni",
    contact: "Contatti",
    menu: "Menu",
    close: "Chiudi",
  },
  projects: {
    label: "Progetti",
    title: "Progetti selezionati",
    sectionDescription:
      "Una selezione di sistemi backend, API e progetti in produzione focalizzati su affidabilità, integrazione dei dati e architettura manutenibile.",

    visibility: {
      private: "Privato",
      public: "Pubblico",
    },

    status: {
      "in-development": "In sviluppo",
      production: "In produzione",
      completed: "Completato",
    },

    actions: {
      repository: "Repository",
      liveSite: "Progetto online",
      technicalOverview: "Panoramica tecnica",
    },

    items: {
      betty: {
        description:
          "Sistema backend modulare per l'analisi dei mercati finanziari e dei segnali di trading, con test automatizzati e integrazioni di dati esterni.",
      },

      "ecommerce-api": {
        description:
          "API REST modulare per la gestione di prodotti, utenti e dati dell'applicazione con un'architettura backend manutenibile.",
      },

      "centro-neurologia": {
        description:
          "Sito web in produzione sviluppato per un centro medico di neurologia, focalizzato su prestazioni, accessibilità e SEO tecnico.",
      },
    },
  },
  about: {
    label: "Chi_sono",
    title: "Chi sono",
    intro: "Dalle operations ai sistemi backend.",
    headline:
      "Pensiero analitico, disciplina operativa e un approccio pratico allo sviluppo backend.",

    paragraphs: {
      background:
        "Ho lavorato per quasi 12 anni in ruoli analitici e operativi presso Banco Galicia, dove precisione, tracciabilità e affidabilità dei processi facevano parte del lavoro quotidiano.",

      present:
        "Oggi applico lo stesso approccio allo sviluppo backend, creando API, integrazioni di dati e sistemi manutenibili con Node.js, TypeScript e test automatizzati, continuando allo stesso tempo ad approfondire le mie competenze di software engineering.",
    },

    traits: {
      analyticalThinking: "Pensiero Analitico",
      processReliability: "Affidabilità dei Processi",
      continuousLearning: "Apprendimento Continuo",
      problemSolving: "Problem Solving",
    },
  },
  skills: {
    label: "Competenze",
    title: "Stack tecnico",
    description:
      "Tecnologie e pratiche che utilizzo per sviluppare, testare e mantenere sistemi backend.",
  },
  certifications: {
    label: "Certificazioni",
    title: "Formazione e certificazioni",
    description:
      "Corsi e certificazioni che supportano la mia formazione continua nell'ambito della software engineering.",

    actions: {
      viewCredential: "Vedi certificato",
    },
  },
  contact: {
    label: "Contatti",
    title: "Costruiamo qualcosa di utile.",
    description:
      "Sono attualmente disponibile per opportunità come Junior / Trainee Backend Developer e per ruoli nel settore tecnologico in cui possa continuare a sviluppare esperienza professionale.",

    actions: {
      sendEmail: "Invia email",
    },
  },
  common: {
    role: "Junior Backend Developer",
  },
  systemPanel: {
    labels: {
      location: "Località",
      role: "Ruolo",
      status: "Stato",
    },

    location: "Piacenza, Italia",
    status: "Disponibile a nuove opportunità",
  },
  accessibility: {
    mainNavigation: "Navigazione principale",
    mobileNavigation: "Navigazione mobile",
    languageSelector: "Selettore della lingua",
    developerProfileSummary: "Riepilogo del profilo dello sviluppatore",
    homeLink: "Carlos Kaar — Home",
  },
};
