import Fa from "solid-fa";

import Styles from "./Button.module.scss";

const Button = (props) => {
    return (
        <li class={Styles.Button}>
            <a href={props.href}>
                <Fa icon={props.icon} />
                <span>{props.label}</span>
            </a>
        </li>
    );
};

export default Button;