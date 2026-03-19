import "./style.css";

import { Trans, useTranslation } from "react-i18next";

export default function AboutMePage() {
  useTranslation();

  return (
    <main className="aboutPage">
      <section>
        <div className="heroWrapper">
          <h1 className="heroTitle">
            <Trans i18nKey="about.title" />
          </h1>
        </div>
        <div className="aboutWrapper">
          <p className="aboutDescription">
            <Trans i18nKey="about.shortDescription" />
          </p>
        </div>
      </section>
      <section>
        <div className="heroWrapper">
          <h2 className="heroTitle">
            <Trans i18nKey="about.journey.title" />
          </h2>
        </div>
        <div className="aboutWrapper">
          <p className="aboutDescription">
            <Trans i18nKey="about.journey.description" />
          </p>
        </div>
      </section>
    </main>
  );
}
