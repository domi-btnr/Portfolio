import "./style.css";

import RepositoryCard from "@components/RepositoryCard";
import { GH_ORGS, GH_USERNAME, octokit } from "@constants";
import { useQueries } from "@tanstack/react-query";
import { CircleAlert, RefreshCw } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";

import i18n from "~/lang";

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

  const isLoading = repoQueries.some(query => query.isLoading);

  const isSomeRateLimited = repoQueries.some(query => query.data?.headers["x-ratelimit-remaining"] === "0");
  const isAllRateLimited = repoQueries.every(query => query.data?.headers["x-ratelimit-remaining"] === "0");
  const rateLimitReset = Math.max(...repoQueries.map(query => Number(query.data?.headers["x-ratelimit-reset"])).filter(Boolean));

  const isSomeFailed = repoQueries.some(query => query.isError);
  const isAllFailed = repoQueries.every(query => query.isError);

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
          {(isLoading || isAllRateLimited || isAllFailed) && (
            <div className="noteSection">
              {isLoading && <RefreshCw className="spinning" />}
              {(isAllRateLimited || isAllFailed) && <CircleAlert />}
              <span>
                <Trans
                  i18nKey={isLoading ? "projects.loadingMessage" : isAllRateLimited ? "projects.fullRateLimitedMessage" : "projects.allFailedMessage"}
                  values={{ rateLimitReset: new Date(rateLimitReset * 1000).toLocaleTimeString(i18n.resolvedLanguage, { hour: "2-digit", minute: "2-digit" }) }}
                />
              </span>
            </div>
          )}
          {(isSomeRateLimited || isSomeFailed) && !isAllRateLimited && !isAllFailed && !isLoading && (
            <div className="banner warning">
              <CircleAlert />
              <Trans i18nKey={isSomeRateLimited ? "projects.someRateLimitedMessage" : "projects.someFailedMessage"} />
            </div>
          )}
          {repositories && !isLoading && (
            <div className="projectsList">
              {repositories.map(repo => (
                <RepositoryCard key={repo.id} {...repo} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
