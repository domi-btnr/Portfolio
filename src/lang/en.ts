import { ResourceLanguage } from "i18next";

const translations: ResourceLanguage = {
  accessibility: {
    toggleThemeLight: "Switch Theme to Darkmode",
    toggleThemeDark: "Switch Theme to Lightmode",
    toggleLanguageEN: "Sprache auf Deutsch ändern",
  },
  navigation: {
    home: "Home",
    about: "About me",
    projects: "Projects",
  },
  footer: {
    copyright: "Dominik Büttner. All rights reserved.",
    description: "I'm Dominik, a Full-Stack Developer",
    navigation: "Navigation",
    social: "Social",
    builtWith: "Built with",
  },
  home: {
    hero: {
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
      viewProjects: "View Projects",
    },
    techStack: {
      title: "Technologies I use",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
    },
  },
  projects: {
    title: "Projects",
    subtitle: "A collection of my open-source personal projects from GitHub",
  },
  repositoryCard: {
    archived: "Archived",
    noDescription: "No description available",
    unknownLanguage: "Unknown Language",
  },
};

export default translations;
