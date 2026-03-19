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
  about: {
    title: "About me",
    shortDescription: [
      "I'm a full-stack developer with a background in building discord plugins, web apps and developer-focused tools.",
      "I mainly work with React and NestJS at the moment. I care about clean code, maintainability and understanding how things work instead of just using them.",
      "Most of my experience comes from building things on my own, maintaining projects over time and exploring new technologies when I need them.",
    ].join("<br /><br />"),
    journey: {
      title: "My journey",
      description: [
        "I started programming at around 14 initially working on Minecraft plugins. That's where my interest in development began and it also shaped how I still learn today: by experimenting, breaking things, and improving them through practice.",
        "After finishing school at 16 I began an apprenticeship where I learned the basics of web development using HTML, CSS and JavaScript as well as some Python. Outside of work I got into Python more seriously and started building a Discord bot. At the time I was still very new to programming and unaware of existing command frameworks which led me to heavily overengineer the project with large conditional structures. While inefficient, this process taught me a lot about problem-solving, program flow and refactoring.",
        "I've always learned best by doing. Rather than following tutorials I preferred exploring existing projects, experimenting with code and figuring things out through trial and error. Around the age of 17 I discovered Discord client modifications such as BetterDiscord. I began experimenting with plugins, initially by looking at the code of existing plugins and adapting them to understand how they worked. Over time I moved away from modifying other people's code and started developing my own plugins from scratch.",
        "One of my first bigger projects was a rewrite of BetterInvites, originally a Powercord plugin which I ported to BetterDiscord. Through feedback from other developers I learned more about JavaScript, React and common frontend libraries. I went on to create several additional plugins and eventually became an approved BetterDiscord plugin developer. Today I maintain multiple plugins of my own and also maintain a few plugins originally created by other developers.",
        "As I got more comfortable with frontend development I started exploring other frameworks. I worked with SolidJS and together with friends we attempted to build a custom Discord client using SolidJS and Electron.",
        "Along the way I also tried out other programming languages. I worked with Vue.js on the SolarTweaks launcher, experimented with C# and C while following tutorials for small projects such as a Unity-based Flappy Bird clone and a GTA V mod menu and used Flutter during my apprenticeship. Those projects weren't huge but they helped me understand different ecosystems. For my final exam I built a small REST API using Go.",
        "After finishing my exams, my role shifted more toward customer support with some smaller scripting tasks in Python. During this time I got more interested in infrastructure and system administration. I began working with virtualization and networking tools such as Proxmox, Docker and VLAN-based network setups and eventually built my own homelab.",
        "In my free time I kept working on Discord plugins and started building a portfolio initially using SolidJS and later rewriting it in React. I switched my job in 2025 and work now as a full-stack developer primarily using React on the frontend and NestJS on the backend.",
        "Overall my path into development has been shaped by curiosity, experimentation and continuous learning across a wide range of technologies. I focus on writing clean, maintainable code and practical solutions.",
      ].join("<br /><br />"),
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
