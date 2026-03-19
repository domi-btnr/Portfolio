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
      subtitle: "Ich bin ein Full-Stack Entwickler aus Deutschland, der mit Code zu experimentieren und Dinge durch Ausprobieren herauszufinden, gelernt hat",
      viewProjects: "Projekte ansehen",
    },
    techStack: {
      title: "Technologien die ich verwende",
      subtitle: "Eine Auswahl von Technologien, die ich in meiner täglichen Arbeit und in persönlichen Projekten verwende",
    },
  },
  about: {
    title: "Über mich",
    shortDescription: [
      "Ich bin Full-Stack-Entwickler mit Erfahrung in der Entwicklung von Discord-Plugins, Web-Anwendungen und Tools für Entwickler.",
      "Ich arbeite derzeit hauptsächlich mit React und NestJS. Mir ist sauberer Code wichtig, genauso wie Wartbarkeit und zu verstehen, wie Dinge wirklich funktionieren, statt sie nur zu benutzen.",
      "Den Großteil meiner Erfahrung habe ich dadurch gesammelt, dass ich Dinge auf meine Weise entwickel, Projekte weiterentwickle und bei Bedarf neue Technologien erkunde.",
    ].join("<br /><br />"),
    journey: {
      title: "Meine Reise",
      description: [
        "Mit etwa 14 Jahren begann ich zu programmieren und arbeitete zunächst an Minecraft-Plugins. Dort entstand mein Interesse an der Softwareentwicklung und es prägte auch meine heutige Lernweise: durch Experimentieren und Dinge durch Ausprobieren herauszufinden.",
        "Nach meinem Schulabschluss mit 16 begann ich eine Ausbildung, in der ich die Grundlagen der Webentwicklung mit HTML, CSS und JavaScript sowie etwas Python lernte. Außerhalb der Arbeit beschäftigte ich mich intensiver mit Python und begann einen Discord-Bot zu entwickeln. Zu dieser Zeit war ich noch sehr neu in Softwareentwicklung und kannte keine bestehenden Bot-Frameworks, was dazu führte, dass ich das Projekt mit umfangreichen IF Strukturen stark überkonstruierte. Obwohl dies ineffizient war, lehrte mich dieser Prozess viel über Problemlösung, Programmablauf und Refactoring.",
        "Ich habe immer am besten durch probieren gelernt. Anstatt Tutorials zu befolgen, zog ich es vor, bestehende Projekte zu erkunden, mit Code zu experimentieren und Dinge durch Ausprobieren herauszufinden. Im Alter von etwa 17 Jahren entdeckte ich Mods für Discord wie z.B. BetterDiscord. Ich begann, mit Plugins zu experimentieren, zunächst indem ich mir den Code bestehender Plugins angeschaut und anpasste, um zu verstehen wie sie funktionierten. Mit der Zeit wandte ich mich davon ab, den Code anderer Leute zu modifizierenund begann meine eigenen Plugins von Grund auf zu erstellen.",
        "Eines meiner ersten größeren Projekte war BetterInvites, ursprünglich ein Powercord-Plugin welches ich für BetterDiscord umgewandelt habe. Durch das Feedback anderer Entwickler lernte ich mehr über JavaScript, React und gängige Frontend-Bibliotheken. Ich entwickelte daraufhin mehrere weitere Plugins und wurde schließlich einer der offiziellen BetterDiscord-Plugin-Entwickler. Heute entwickele und repariere ich mehrere eigene Plugins und kümmere mich auch um einige Plugins, die ursprünglich von anderen Entwicklern erstellt wurden.",
        "Als ich mich mit der Frontend-Entwicklung immer besser zurecht gefunden habe, begann ich andere Frameworks zu erkunden. Ich versuchte z.B. gemeinsam mit Freunden, einen eigenen Discord-Client mit SolidJS und Electron zu erstellen.",
        "Nebenbei habe ich auch andere Programmiersprachen ausprobiert. Ich arbeitete mit Vue.js am SolarTweaks-Launcher, experimentierte mit C# und C, während ich Tutorials für kleine Projekte wie einen Unity-basierten Flappy-Bird-Klon und ein GTA V Mod-Menü befolgte, und lernte während meiner Ausbildung Flutter. Diese Projekte waren nicht riesig aber sie halfen mir verschiedene Ökosysteme zu verstehen. Für meine Abschlussprüfung entwickelte ich eine kleine REST-API mit Go.",
        "Nach Abschluss meiner Prüfungen verlagerte sich mein Aufgabenbereich mehr in Richtung Kundensupport mit einigen kleineren Skripting-Aufgaben in Python. Während dieser Zeit begann ich mich mehr für Infrastruktur und Systemadministration zu interessieren. Ich begann mit Virtualisierungs- und Netzwerktools wie Proxmox, Docker und VLAN-basierten Netzwerkkonfigurationen zu arbeiten und baute schließlich mein eigenes Homelab auf.",
        "In meiner Freizeit arbeitete ich weiter an Discord-Plugins und begann ein Portfolio zu erstellen. Zunächst mit SolidJS und später auf React umgeschrieben. Im Jahr 2025 wechselte ich meinen Job und arbeite nun als Full-Stack-Entwickler, wobei ich hauptsächlich React im Frontend und NestJS im Backend verwende.",
        "Insgesamt wurde mein Weg in die Softwareentwicklung von Neugier, Experimentierfreude und kontinuierlichem Lernen in einem breiten Spektrum an verschiedenen Technologien geprägt. Ich probiere sauberen, wartbaren Code und praktische Lösungen zu entwickeln.",
      ].join("<br /><br />"),
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
