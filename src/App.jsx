import { faGithub, faDiscord, faSpotify, faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Button from "./components/Button";
import Styles from "./App.module.scss";

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
            <Button HREF="https://github.com/HypedDomi" Icon={faGithub} Label="GitHub" />
            <Button HREF="https://discord.com/users/354191516979429376" Icon={faDiscord} Label="Discord" />
            <Button HREF="https://open.spotify.com/user/w3n4nfntxo820v80ti441uplr" Icon={faSpotify} Label="Spotify" />
            <Button HREF="https://paypal.me/dominik1711" Icon={faPaypal} Label="PayPal" />
            <Button HREF="mailto:dominik.buettner1711@gmail.com" Icon={faEnvelope} Label="E-Mail" />
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
