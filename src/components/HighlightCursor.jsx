import { createEffect, createSignal } from "solid-js";

import Style from "./HighlightCursor.module.scss";

const HighlightCursor = () => {
    const [cursorPosition, setCursorPosition] = createSignal({ x: "0px", y: "0px" });

    createEffect(() => {
        const handleMouseMove = e => setCursorPosition({ x: `${e.clientX}px`, y: `${e.clientY}px` });
        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    });

    return (
        <div class={Style.highlightCursorWrapper}>
            <span class={Style.highlightCursor} style={{ top: cursorPosition().y, left: cursorPosition().x }} />
        </div>
    );
};

export default HighlightCursor;
