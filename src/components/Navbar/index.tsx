import { useEffect, useState } from "react";

import style from "./index.module.css";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${style.navbarRoot} ${scrolled ? style.navbarRootScrolled : ""}`}>
      <div className={style.navbarContainer}>
        <a href="/">
          <img src="/favicon.ico" />
        </a>
        <div className={style.navLinks}>
          {NAV_LINKS.map(link => (
            <a key={link.name} href={link.href} className={style.navLink}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
