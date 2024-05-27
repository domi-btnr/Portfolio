import { createEffect, createSignal, For } from "solid-js";

import Style from "./Projects.module.scss";
import SocialButton from "./SocialButton";

const ProjectTile = props => {
    console.log(props);
    return (
        <div class={Style.projectTile}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <SocialButton href={props.html_url} label="See on GitHub" />
        </div>
    );
};

const Projects = () => {
    const GH_USER = "domi-btnr";
    const [projects, setProjects] = createSignal([]);
    createEffect(() => {
        fetch(`https://api.github.com/users/${GH_USER}/repos`)
            .then(response => response.json())
            .then(data => {
                return data.filter(repo => !repo.fork && !repo.archived && repo.name !== GH_USER)
                    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            })
            .then(data => setProjects(data))
            .catch(error => console.error(error));
    });
    return (
        <div class={Style.projectList}>
            <For each={projects()}>
                {project => (
                    <ProjectTile {...project} />
                )}
            </For>
        </div>
    );
};

export default Projects;
