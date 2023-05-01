import Fa from "solid-fa";

import Styles from "./Button.module.scss";

const Button = (props) => {
    return (
        <li class={Styles.Button}>
            <a href={props.HREF}>
                <Fa icon={props.Icon} />
                <span>{props.Label}</span>
            </a>
        </li>
    );
};

export default Button;