import { faDiscord, faGithub, faLinkedin, faPaypal, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { onMount } from "solid-js";

import Style from "./App.module.scss";
import Age from "./components/Age";
import HighlightCursor from "./components/HighlightCursor";
import SocialButton from "./components/SocialButton";
import Tooltip from "./components/Tooltip";

const App = () => {

    onMount(() => {
        inject();
        injectSpeedInsights();
    });

    return (
        <>
            <HighlightCursor />
            <header class={Style.header}>
                <h1>Dominik Büttner</h1>
                <h2>Self-thaught Developer</h2>
            </header>
            <main class={Style.about}>
                <p>
                  Hello! I'm Dominik, a <Age date={"11/17/2003"} /> old <span>self-taught developer</span> from <Tooltip text={() => "🇩🇪 Deutschland"}>Germany</Tooltip> with a passion for <span>coding and technology</span>.
                  My journey in programming began at 14 when I started creating <span>Minecraft plugins</span>.
                  Through <span>learning by doing</span>, I've gained a wealth of knowledge and experience in various areas of <span>software development</span>.
                </p>

                <p>
                  After finishing school, I pursued a formal education as an <span>application developer</span>, which has sharpened my skills even more.
                  At 17, I had my first encounter with <span>web development</span>, opening up a world of exciting possibilities.
                  Around the same time, I started exploring <span>Python</span> and have since developed several <span>Discord bots</span> and other fun projects.
                </p>

                <p>
                  At 18, I dove into the <span>Discord client modding</span> community and created a few plugins, expanding my understanding of <span>system interactions</span>.
                  I also have hands-on experience with <span>Linux servers</span>, <span>Docker</span>, and <span>reverse proxy setups</span>, which I find incredibly enjoyable to work with.
                </p>

                <p>
                  Currently, I'm relatively advanced in <span>JavaScript</span>, <span>Python</span> and <span>Docker</span>.
                  I also have basic knowledge of <span>SolidJS</span> and <span>React</span>, and I'm always eager to learn more.
                  My approach to development is driven by <span>curiosity</span> and the desire to create <span>efficient and effective solutions</span>.
                </p>

                <p>
                  I'm excited to continue growing my skills and taking on new, <span>challenging projects</span>.
                </p>
            </main>
            <div class={Style.socials}>
                <ul>
                    <SocialButton href="https://github.com/domi-btnr" icon={faGithub} label="GitHub" />
                    <SocialButton href="https://linkedin.com/in/domi-btnr" icon={faLinkedin} label="LinkedIn" />
                    <SocialButton href="mailto:me@domi-btnr.dev" icon={faEnvelope} label="E-Mail" />
                    <SocialButton href="https://discord.com/users/354191516979429376" icon={faDiscord} label="Discord" />
                    <SocialButton href="https://open.spotify.com/user/w3n4nfntxo820v80ti441uplr" icon={faSpotify} label="Spotify" />
                    <SocialButton href="https://paypal.me/domibtnr" icon={faPaypal} label="PayPal" />
                </ul>
            </div>
        </>
    );
};

export default App;
