import { faGithub, faDiscord, faSpotify, faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Age from "./components/Age";
import Button from "./components/Button";
import Styles from "./App.module.scss";

import mouseScrollImg from "./assets/mouse-scroll.png"

const App = () => {
  return (
    <>
      <div className={Styles.Modal}>
        <div className={Styles.ContentLeft}>
          <img src="https://avatars.githubusercontent.com/u/50876016?v=4" />
          <h1>Dominik</h1>
          <p>Hobby programmer and student</p>
        </div>
        <div className={Styles.ContentRight}>
          <ul>
            <Button href="https://github.com/HypedDomi" icon={faGithub} label="GitHub" />
            <Button href="https://discord.com/users/354191516979429376" icon={faDiscord} label="Discord" />
            <Button href="https://open.spotify.com/user/w3n4nfntxo820v80ti441uplr" icon={faSpotify} label="Spotify" />
            <Button href="https://paypal.me/domibtnr" icon={faPaypal} label="PayPal" />
            <Button href="mailto:me@domi-btnr.dev" icon={faEnvelope} label="E-Mail" />
          </ul>
        </div>
        <a href="#about" className={Styles.ScrollIndicator}>
          <img src={mouseScrollImg} />
        </a>
        <div id="about" className={Styles.ContentBottom}>
          <p>
            Hello, I'm Dominik, a {<Age date={"11/17/2003"} />} old hobby programmer and student from Germany.
            I have always preferred to learn programming languages through doing.
            I have developed my skill in a number of languages through real-world experience.
            At the age of 14, I started creating Minecraft plugins, which marked the beginning of my programming hobby.
            My main areas of interest throughout the years have been Python and JavaScript/TypeScript.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;