import "./style.css";

import { NAV_LINKS } from "@components/Navbar";
import { faDiscord, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail } from "lucide-react";
import { Trans } from "react-i18next";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerGrid">
          <div className="footerSection">
            <h3 className="footerTitle">Dominik Büttner</h3>
            <p className="footerText">
              <Trans i18nKey={"footer.description"} />
            </p>
          </div>
          <div className="footerSection">
            <h4 className="footerHeading">
              <Trans i18nKey={"footer.navigation"} />
            </h4>
            <nav className="footerNav">
              {NAV_LINKS.map(link => (
                <Link key={link.name} to={link.href}>
                  <Trans i18nKey={`navigation.${link.name}`} />
                </Link>
              ))}
            </nav>
          </div>
          <div className="footerSection">
            <h4 className="footerHeading">
              <Trans i18nKey={"footer.social"} />
            </h4>
            <div className="footerSocial">
              <a href="https://github.com/domi-btnr" target="_blank" rel="noreferrer">
                <span className="footerIcon">
                  <FontAwesomeIcon icon={faGithub} />
                </span>
                GitHub
              </a>
              <a href="https://linkedin.com/in/domi-btnr" target="_blank" rel="noreferrer">
                <span className="footerIcon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
                LinkedIn
              </a>
              <a href="mailto:me@domi-btnr.dev">
                <span className="footerIcon">
                  <Mail />
                </span>
                E-Mail
              </a>
              <a href="https://discord.com/users/354191516979429376" target="_blank" rel="noreferrer">
                <span className="footerIcon">
                  <FontAwesomeIcon icon={faDiscord} />
                </span>
                Discord
              </a>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <p>&copy; {new Date().getFullYear()} Dominik Büttner. All rights reserved.</p>
          <p>
            <Trans i18nKey={"footer.builtWith"} /> <span>Vite</span>, <span>React</span> & <span>TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
