import Fa from "solid-fa";

import Style from "./SocialButton.module.scss";
import Tooltip from "./Tooltip";

const SocialButton = props => {
    return (
        <li class={Style.socialButton}>
            <Tooltip text={() => props.label}>
                <a href={props.href} target="_blank" rel="noopener noreferrer">
                    <Fa icon={props.icon} />
                </a>
            </Tooltip>
        </li>
    );
};

export default SocialButton;
