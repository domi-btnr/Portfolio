import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowsRotate, faCodeFork, faStar, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Fa from "solid-fa";
import { createResource, For, Match, onCleanup, Show, Switch } from "solid-js";

import Style from "./Projects.module.scss";
import SocialButton from "./SocialButton";

const ProjectTile = props => {
    const retryTimeout = null;

    const fetchLanguages = async url => {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            const resetTimestamp = response.headers.get("X-Ratelimit-Reset");
            const remainingRequests = Number(response.headers.get("X-Ratelimit-Remaining") ?? 0);
            const errorMessage = `API request failed with status ${response.status}: ${data.message.split(". ")[0]}`;
            if (!remainingRequests) {
                const resetTime = new Date(resetTimestamp * 1000);
                const delay = resetTime - new Date();
                const prettyResetTime = `${resetTime.getHours().toString().padStart(2, "0")}:${resetTime.getMinutes().toString().padStart(2, "0")}`;
                console.error(`Rate limit exceeded, retrying at ${prettyResetTime}`);
                setTimeout(refetch, delay);
            } else console.error(errorMessage);
            throw new Error(errorMessage);
        }

        return Object.keys(data).slice(0, 4);
    };

    // eslint-disable-next-line solid/reactivity
    const [languages, { refetch }] = createResource(() => fetchLanguages(props.languages_url), { initialValue: [props.language] });
    onCleanup(() => clearTimeout(retryTimeout));

    return (
        <div class={Style.projectTile}>
            <h3>{props.name}</h3>
            <Show when={props.description}>
                <p>{props.description}</p>
            </Show>
            <div class={Style.stats}>
                <For each={languages()}>
                    {language => <span>{language}</span>}
                </For>
                <Show when={props.stargazers_count || props.forks_count}>
                    <div>•</div>
                    <Show when={props.stargazers_count}>
                        <a href={`${props.html_url}/stargazers`} target="_blank" rel="noopener noreferrer">
                            <Fa icon={faStar} />
                            {`${props.stargazers_count} ${props.stargazers_count > 1 ? "Stars" : "Star"}`}
                        </a>
                    </Show>
                    <Show when={props.forks_count}>
                        <a href={`${props.html_url}/forks`} target="_blank" rel="noopener noreferrer">
                            <Fa icon={faCodeFork} />
                            {`${props.forks_count} ${props.forks_count > 1 ? "Forks" : "Fork"}`}
                        </a>
                    </Show>
                </Show>
            </div>
            <SocialButton href={props.html_url} icon={faGithub} label="View on GitHub" />
        </div>
    );
};

const Projects = () => {
    const GH_USER = "domi-btnr";
    let retryTimeout = null;

    const fetchProjects = async () => {
        const response = await fetch(`https://api.github.com/users/${GH_USER}/repos`);
        const data = await response.json();

        if (!response.ok) {
            const resetTimestamp = response.headers.get("X-Ratelimit-Reset");
            const remainingRequests = Number(response.headers.get("X-Ratelimit-Remaining") ?? 0);
            const errorMessage = `API request failed with status ${response.status}: ${data.message.split(". ")[0]}`;
            if (!remainingRequests) {
                const resetTime = new Date(resetTimestamp * 1000);
                const delay = resetTime - new Date();
                const prettyResetTime = `${resetTime.getHours().toString().padStart(2, "0")}:${resetTime.getMinutes().toString().padStart(2, "0")}`;
                console.error(`Rate limit exceeded, retrying at ${prettyResetTime}`);
                if (retryTimeout) clearTimeout(retryTimeout);
                retryTimeout = setTimeout(refetch, delay);
            } else console.error(errorMessage);
            throw new Error(errorMessage);
        }

        if (!Array.isArray(data)) throw new TypeError(`Expected an array but got ${typeof data}`);

        return data.filter(repo => !repo.fork && !repo.archived && repo.name !== GH_USER)
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    };

    const [projects, { refetch }] = createResource(fetchProjects, { initialValue: [] });
    onCleanup(() => clearTimeout(retryTimeout));

    return (
        <div class={Style.projectList}>
            <Switch>
                <Match when={projects.loading}>
                    <div class={Style.loadingWrapper}>
                        <Fa icon={faArrowsRotate} />
                        <span>Loading projects...</span>
                    </div>
                </Match>
                <Match when={projects.error}>
                    <div class={Style.errorWrapper}>
                        <Fa icon={faTriangleExclamation} />
                        <span>Error fetching projects:</span>
                        <p>{projects.error.message}</p>
                    </div>
                </Match>
                <Match when={projects()}>
                    <For each={projects()}>
                        {project => <ProjectTile {...project} />}
                    </For>
                </Match>
            </Switch>
        </div>
    );
};

export default Projects;
