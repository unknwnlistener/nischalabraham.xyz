import { useState, useEffect } from "react";
import Sun from "../assets/Sun";

export default function ThemeToggleButton() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);
    return (
        <button
            type="button"
            className="dark-mode-toggle"
            onClick={() => setDarkMode(!darkMode)}
        >
            <Sun darkMode={darkMode} />
        </button>
    );
}
