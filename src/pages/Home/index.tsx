import "./style.css";

import { ArrowRight } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router";

const techStack = [
  { name: "TypeScript", imgSrc: "/tech-stack/typescript.svg" },
  { name: "JavaScript", imgSrc: "/tech-stack/javascript.svg" },
  { name: "React", imgSrc: "/tech-stack/react.svg" },
  { name: "Vite", imgSrc: "/tech-stack/vite.svg" },
  { name: "Docker", imgSrc: "/tech-stack/docker.svg" },
  { name: "Git", imgSrc: "/tech-stack/git.svg" },
  { name: "MongoDB", imgSrc: "/tech-stack/mongodb.svg" },
  { name: "Python", imgSrc: "/tech-stack/python.svg" },
  { name: "Proxmox", imgSrc: "/tech-stack/proxmox.svg" },
  { name: "Ubiquiti", imgSrc: "/tech-stack/ubiquiti.svg" },
  { name: "Wireguard", imgSrc: "/tech-stack/wireguard.svg" },
  { name: "Java", imgSrc: "/tech-stack/java.svg" },
  { name: "Visual Studio Code", imgSrc: "/tech-stack/vscode.svg" },
  { name: "SolidJS", imgSrc: "/tech-stack/solidjs.svg" },
];

export default function HomePage() {
  useTranslation();

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
        <div className="techStackCarousel">
          <div className="techStackTrack">
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={tech.name + i} className="techStackCard">
                <img src={tech.imgSrc} alt={tech.name} draggable={false} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
