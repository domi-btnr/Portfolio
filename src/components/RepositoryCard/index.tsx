import "./style.css";

import { MAX_TOPICS } from "@constants";
import { RestEndpointMethodTypes } from "@octokit/rest";
import { Calendar, GitFork, Star } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";

import i18n from "~/lang";

type GitHubRepositoryType = RestEndpointMethodTypes["repos"]["listForUser"]["response"]["data"][number];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString(i18n.resolvedLanguage, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function RepositoryCard(repository: GitHubRepositoryType) {
  useTranslation();

  return (
    <div className="repositoryCard">
      <div className="repositoryHeader">
        <h2 className="repositoryTitle">
          <a href={repository.owner.html_url} target="_blank" rel="noopener noreferrer">
            <span className="repositoryOwner">
              <img
                src={repository.owner.avatar_url}
                alt={`${repository.owner.login} avatar`}
                className="repositoryOwnerAvatar"
                style={{ borderRadius: repository.owner.type === "User" ? "50%" : "25%" }}
                draggable={false}
                loading="lazy"
              />
              {repository.owner.login}
            </span>
          </a>
          <span className="repositoryTitleDivider">/</span>
          <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
            {repository.name}
          </a>
          {repository.archived && (
            <span className="repositoryBadge repositoryArchived">
              <Trans i18nKey="repositoryCard.archived" />
            </span>
          )}
        </h2>
        <div className="repositoryStats">
          <a href={repository.stargazers_url} target="_blank" rel="noopener noreferrer">
            <Star size={14} />
            {repository.stargazers_count}
          </a>
          <a href={repository.forks_url} target="_blank" rel="noopener noreferrer">
            <GitFork size={14} />
            {repository.forks_count}
          </a>
        </div>
      </div>
      <p className="repositoryDescription">{repository.description ?? <Trans i18nKey="repositoryCard.noDescription" />}</p>
      {repository.topics && repository.topics.length > 0 && (
        <div className="repositoryTopics">
          {repository.topics.slice(0, MAX_TOPICS).map(topic => (
            <span key={topic} className="repositoryBadge repositoryTopic">
              {topic}
            </span>
          ))}
          {repository.topics.length > MAX_TOPICS && (
            <span className="repositoryBadge repositoryTopic repositoryTopicMore">+{repository.topics.length - MAX_TOPICS}</span>
          )}
        </div>
      )}
      <div className="repositoryFooter">
        <div className="repositoryLanguage">
          {/* TODO: Get the correct language color */}
          <span className="repositoryCardLanguageDot" />
          {repository.language ?? <Trans i18nKey="repositoryCard.unknownLanguage" />}
        </div>
        <span className="repositoryDate">
          <Calendar size={14} />
          {formatDate(repository.pushed_at ?? repository.created_at!)}
        </span>
      </div>
    </div>
  );
}
