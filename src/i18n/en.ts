import type { TranslationDictionary } from "./translations";

export const en: TranslationDictionary = {
  hero: {
    greeting: "Hi, I'm",
    role: "Junior Backend Developer",
    description:
      "Backend developer focused on building reliable APIs, data integrations and maintainable server-side systems with Node.js, Express and PostgreSQL.",
    viewProjects: "View projects",
    downloadCv: "Download CV",
  },
  navigation: {
    projects: "Projects",
    about: "About",
    skills: "Skills",
    certifications: "Certifications",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
  },
  projects: {
    label: "Projects",
    title: "Selected Work",
    sectionDescription:
      "A selection of backend systems, APIs and production projects focused on reliability, data integration and maintainable architecture.",

    visibility: {
      private: "Private",
      public: "Public",
    },

    status: {
      "in-development": "In development",
      production: "Production",
      completed: "Completed",
    },

    actions: {
      repository: "Repository",
      liveSite: "Live project",
      technicalOverview: "Technical overview",
    },

    items: {
      betty: {
        description:
          "Modular backend system for financial-market analysis and trading signals, with automated testing and external data integrations.",
      },

      "ecommerce-api": {
        description:
          "Modular REST API for managing products, users and application data with a maintainable backend architecture.",
      },

      "centro-neurologia": {
        description:
          "Production website built for a neurology medical center, focused on performance, accessibility and technical SEO.",
      },
    },
  },
  about: {
    label: "About_me",
    title: "About Me",
    role: "Junior Backend Developer",
    intro: "From operations to backend systems.",
    headline:
      "Analytical thinking, operational discipline and a practical approach to backend development.",

    paragraphs: {
      background:
        "I spent nearly 12 years working in analytical and operational roles at Banco Galicia, where accuracy, traceability and process reliability were part of everyday work.",

      present:
        "Today, I bring that same mindset to backend development, building APIs, data integrations and maintainable systems with Node.js, TypeScript and automated testing while continuing to deepen my software engineering skills.",
    },

    traits: {
      analyticalThinking: "Analytical Thinking",
      processReliability: "Process Reliability",
      continuousLearning: "Continuous Learning",
      problemSolving: "Problem Solving",
    },
  },
  skills: {
    label: "Skills",
    title: "Technical Stack",
    description:
      "Technologies and practices I use to build, test and maintain backend systems.",
  },
  certifications: {
    label: "Certifications",
    title: "Learning & Certifications",
    description:
      "Courses and certifications that support my continued development in software engineering.",

    actions: {
      viewCredential: "View credential",
    },
  },
};
