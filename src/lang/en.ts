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
    description: "Full-Stack Developer from Germany, learned through practice, experiments and curiosity",
    navigation: "Navigation",
    social: "Social",
    builtWith: "Built with",
  },
  home: {
    hero: {
      title: "Hi, I'm Dominik 👋🏼 <br /> Full-Stack Developer",
      subtitle: "I'm a self-taught Full-Stack Developer from Germany who learned by experimenting, breaking things, and trying to build them better",
      viewProjects: "View Projects",
    },
    techStack: {
      title: "Technologies I use",
      subtitle: "A selection of technologies I use in my day-to-day work and personal projects",
    },
  },
  projects: {
    title: "Projects",
    subtitle: "A collection of my open-source personal projects from GitHub",
    loadingMessage: "Loading projects from GitHub",
    fullRateLimitedMessage:
      "You have reached the maximum number of requests. Please try again later. The rate limit will reset at <strong>{{rateLimitReset}}</strong>.",
    someRateLimitedMessage: "You have reached the maximum number of requests. Some projects can not be displayed.",
    allFailedMessage: "An error occurred while loading projects from GitHub. Please try again later.",
    someFailedMessage: "An error occurred while loading some projects from GitHub. Some projects can not be displayed.",
  },
  repositoryCard: {
    archived: "Archived",
    noDescription: "No description available",
    unknownLanguage: "Unknown Language",
  },
};

export default translations;
