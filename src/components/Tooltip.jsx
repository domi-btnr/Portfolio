import Styles from "./Tooltip.module.scss";

const Tooltip = ({ children, text }) => {
    return (
        <div className={Styles.TooltipWrapper}>
            <span className={Styles.TooltipText}>{text()}</span>
            {children}
        </div>
    );
};

export default Tooltip;