import "./style.css";

import ThemeToggle from "@components/ThemeToggle";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Trans } from "react-i18next";
import { Link, useLocation } from "react-router";

// eslint-disable-next-line react-refresh/only-export-components
export const NAV_LINKS = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={clsx({ navbarRoot: true, scrolled })}>
      <div className="navbarContainer">
        <Link to="/">
          <img src="/favicon.ico" alt="Avatar" />
        </Link>
        <div className="navLinks">
          {NAV_LINKS.map(link => (
            <Link key={link.name} to={link.href} className={clsx({ navLink: true, active: location.pathname === link.href })}>
              <Trans i18nKey={`navigation.${link.name}`} />
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
