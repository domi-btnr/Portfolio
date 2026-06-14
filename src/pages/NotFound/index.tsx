import "./style.css";

import { ArrowLeft } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function NotFoundPage() {
  useTranslation();

  return (
    <main className="notFoundPage">
      <span className="notFoundCode">404</span>
      <h1 className="notFoundTitle">
        <Trans i18nKey="notFound.title" />
      </h1>
      <p className="notFoundSubtitle">
        <Trans i18nKey="notFound.subtitle" />
      </p>
      <Link to="/" className="notFoundButton">
        <ArrowLeft size={16} />
        <Trans i18nKey="notFound.backHome" />
      </Link>
    </main>
  );
}
