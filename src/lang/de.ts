import { ResourceLanguage } from "i18next";

const translations: ResourceLanguage = {
  accessibility: {
    toggleThemeLight: "Ansicht auf Nachtmodus wechseln",
    toggleThemeDark: "Ansicht auf Tagmodus wechseln",
    toggleLanguageDE: "Change Language to English",
  },
  navigation: {
    home: "Startseite",
    about: "Über mich",
    projects: "Projekte",
  },
  footer: {
    copyright: "Dominik Büttner. Alle Rechte vorbehalten.",
    description: "Full-Stack Entwickler aus Deutschland, gelernt durch Praxis, Experimente und Neugier",
    navigation: "Navigation",
    social: "Soziales",
    builtWith: "Gebaut mit",
  },
  home: {
    hero: {
      title: "Hi, Ich bin Dominik 👋🏼 <br /> Full-Stack Entwickler",
      subtitle:
        "Ich bin ein Full-Stack Entwickler aus Deutschland, der durch experimentieren, Dinge kaputt machen und dem Versuch, sie besser zu machen, gelernt hat",
      viewProjects: "Projekte ansehen",
    },
    techStack: {
      title: "Technologien die ich verwende",
      subtitle: "Eine Auswahl von Technologien, die ich in meiner täglichen Arbeit und in persönlichen Projekten verwende",
    },
  },
  projects: {
    title: "Projekte",
    subtitle: "Eine Kollektion von meinen persönlichen open-source Projekten von GitHub",
    loadingMessage: "Lade Projekte von GitHub",
    fullRateLimitedMessage:
      "Du hast die maximale Anzahl an Anfragen erreicht. Bitte versuche es später erneut. Die Sperre wird um <strong>{{rateLimitReset}}</strong> zurückgesetzt.",
    someRateLimitedMessage: "Du hast die maximale Anzahl an Anfragen erreicht. Einige Projekte konnten nicht geladen werden.",
    allFailedMessage: "Es trat ein Fehler beim Laden der Projekte von GitHub auf. Bitte versuche es später erneut.",
    someFailedMessage: "Es trat ein Fehler beim Laden einiger Projekte von GitHub auf. Einige Projekte konnten nicht geladen werden.",
  },
  repositoryCard: {
    archived: "Archiviert",
    noDescription: "Keine Beschreibung verfügbar",
    unknownLanguage: "Unbekannte Sprache",
  },
};

export default translations;
