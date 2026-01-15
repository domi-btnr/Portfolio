import "./style.css";

import RepositoryCard from "@components/RepositoryCard";
import { GH_ORGS, GH_USERNAME, octokit } from "@constants";
import { useQueries } from "@tanstack/react-query";
import { Trans, useTranslation } from "react-i18next";

export default function ProjectsPage() {
  useTranslation();

  const repoQueries = useQueries({
    queries: [
      {
        queryKey: ["repositories", GH_USERNAME],
        queryFn: () => octokit.rest.repos.listForUser({ username: GH_USERNAME }),
      },
      ...GH_ORGS.map(org => ({
        queryKey: ["repositories", org],
        queryFn: () => octokit.rest.repos.listForUser({ username: org }),
      })),
    ],
  });

  const repositories = repoQueries
    .flatMap(q => q.data?.data ?? [])
    .sort((a, b) => {
      return new Date(b.pushed_at ?? b.created_at!).getTime() - new Date(a.pushed_at ?? a.created_at!).getTime();
    });

  return (
    <main className="projectsPage">
      <div className="containerWrapper">
        <div className="heroWrapper">
          <h1 className="heroTitle">
            <Trans i18nKey="projects.title" />
          </h1>
          <p className="heroSubtitle">
            <Trans i18nKey="projects.subtitle" />
          </p>
        </div>
        <div className="projectsWrapper">
          {repositories.map(repo => (
            <RepositoryCard key={repo.id} {...repo} />
          ))}
        </div>
      </div>
    </main>
  );
}
