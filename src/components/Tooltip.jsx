import Styles from "./Tooltip.module.scss";

const Tooltip = props => {
    return (
        <div class={Styles.tooltipWrapper}>
            <span class={Styles.tooltipText}>{props.text()}</span>
            {props.children}
        </div>
    );
};

export default Tooltip;
