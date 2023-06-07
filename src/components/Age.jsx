import { createSignal, createEffect } from "solid-js";
import Tooltip from "./Tooltip";

const getAge = (birthDate) => {
    const currentDate = new Date();
    const ageDiff = Math.abs(currentDate - birthDate);
    const yearsDiff = Math.floor(ageDiff / (1000 * 60 * 60 * 24 * 365));
    const monthsDiff = currentDate.getMonth() - birthDate.getMonth();
    const daysDiff = currentDate.getDate() - birthDate.getDate();

    return {
        years: yearsDiff,
        months: yearsDiff * 12 + monthsDiff,
        days: yearsDiff * 365 + Math.floor(monthsDiff * 30.44) + daysDiff
    };
};

const Age = ({ date }) => {
    const [birthDate] = createSignal(new Date(date));
    const [age, setAge] = createSignal(getAge(birthDate()));

    createEffect(() => {
        const interval = setInterval(() => setAge(getAge(birthDate())), 1000);

        return () => clearInterval(interval);
    });

    const toggleUnits = () => {
        const units = ["months", "days"];
        const currentIndex = units.indexOf(toggle());
        const nextIndex = (currentIndex + 1) % units.length;
        setToggle(units[nextIndex]);
    };
    
    const [toggle, setToggle] = createSignal("months");

    return (
        <Tooltip text={() => `${age()[toggle()]} ${toggle()}`}>
            <span onClick={toggleUnits} style={{ cursor: "pointer" }}>
                {`${age()["years"]} years`}
            </span>
        </Tooltip>
    );
};

export default Age;
