import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCodeFork, faStar, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Fa from "solid-fa";
import { createEffect, createSignal, For, onCleanup, Show } from "solid-js";

import Style from "./Projects.module.scss";
import SocialButton from "./SocialButton";

const ProjectTile = props => {
    // eslint-disable-next-line solid/reactivity
    const [languages, setLanguages] = createSignal([props.language]);
    createEffect(() => {
        fetch(props.languages_url)
            .then(response => response.json())
            .then(data => Object.keys(data))
            .then(data => data.slice(0, 4))
            .then(data => setLanguages(data))
            .catch(error => console.error(error));
    });
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
                        <a href={`${props.html_url}/stargazers`}>
                            <Fa icon={faStar} />
                            {`${props.stargazers_count} ${props.stargazers_count > 1 ? "Stars" : "Star"}`}
                        </a>
                    </Show>
                    <Show when={props.forks_count}>
                        <a href={`${props.html_url}/forks`}>
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
    const [projects, setProjects] = createSignal([]);
    const [error, setError] = createSignal(null);

    const fetchProjects = () => {
        fetch(`https://api.github.com/users/${GH_USER}/repos`)
            .then(response => response.json().then(data => {
                if (!response.ok) throw new Error(`API request failed with status ${response.status}: ${data.message.split(". ")[0]}`);
                return data;
            }))
            .then(data => {
                if (!Array.isArray(data)) throw new TypeError(`Expected an array but got ${typeof data}`);
                return data.filter(repo => !repo.fork && !repo.archived && repo.name !== GH_USER)
                    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            })
            .then(data => setProjects(data))
            .catch(error => {
                setError(error.message);
                console.error(error.message);
            });
    };

    createEffect(() => {
        fetchProjects();
        const interval = setInterval(error() ? fetchProjects : null, 1000 * 60 * 5);

        onCleanup(() => clearInterval(interval));
    });
    return (
        <div class={Style.projectList}>
            <Show when={error() && !projects().length} fallback={
                <For each={projects()}>
                    {project => <ProjectTile {...project} />}
                </For>
            }>
                <div class={Style.errorWrapper}>
                    <Fa icon={faTriangleExclamation} />
                    <span>Error fetching projects:</span>
                    <p>{error()}</p>
                </div>
            </Show>
        </div>
    );
};

export default Projects;
