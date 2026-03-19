import "./style.css";

import useTheme from "@contexts/ThemeProvider";
import { ArrowRight } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router";

const techStack = [
  { name: "TypeScript", imgSrc: "/tech-stack/typescript.svg" },
  { name: "JavaScript", imgSrc: "/tech-stack/javascript.svg" },
  { name: "React", imgSrc: "/tech-stack/react.svg" },
  { name: "SolidJS", imgSrc: "/tech-stack/solidjs.svg" },
  { name: "Vite", imgSrc: "/tech-stack/vite.svg" },
  { name: "Docker", imgSrc: "/tech-stack/docker.svg" },
  { name: "Git", imgSrc: "/tech-stack/git.svg" },
  { name: "MongoDB", imgSrc: "/tech-stack/mongodb.svg" },
  { name: "Python", imgSrc: "/tech-stack/python.svg" },
  {
    name: "Proxmox",
    imgSrc: {
      light: "/tech-stack/proxmox-dark.svg",
      dark: "/tech-stack/proxmox-light.svg",
    },
  },
  { name: "Ubiquiti", imgSrc: "/tech-stack/ubiquiti.svg" },
  { name: "Wireguard", imgSrc: "/tech-stack/wireguard.svg" },
  { name: "Java", imgSrc: "/tech-stack/java.svg" },
  { name: "Visual Studio Code", imgSrc: "/tech-stack/vscode.svg" },
];

export default function HomePage() {
  useTranslation();
  const { activeTheme } = useTheme();

  return (
    <main className="homePage">
      <section>
        <h1 className="heroTitle">
          <Trans i18nKey="home.hero.title" />
        </h1>
        <p className="heroSubtitle">
          <Trans i18nKey="home.hero.subtitle" />
        </p>
        <Link to="/projects" className="heroActionButton">
          <Trans i18nKey="home.hero.viewProjects" />
          <ArrowRight size={16} />
        </Link>
      </section>
      <section>
        <h2 className="heroTitle">
          <Trans i18nKey="home.techStack.title" />
        </h2>
        <p className="heroSubtitle">
          <Trans i18nKey="home.techStack.subtitle" />
        </p>
        <div className="techStackGrid">
          {techStack.map(tech => (
            <div key={tech.name} className="techStackCard">
              <img src={typeof tech.imgSrc === "object" ? tech.imgSrc[activeTheme] : tech.imgSrc} alt={tech.name} draggable={false} loading="lazy" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
