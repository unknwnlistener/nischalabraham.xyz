import { useState, useEffect } from "react";
import ThemeIcon from "../assets/ThemeIcon";

const prefersDark = matchMedia('(prefers-color-scheme: dark)');

export default function ThemeSelect() {
    const [colorPreference, setColorPreference] = useState(prefersDark.matches ? "dark" : "light");
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

    const isDark = (theme === "system" && colorPreference === "dark") || (theme === "dark");

    const toggleTheme = () => {
        setTheme(theme => theme === "system" ? "light" : (theme === "light" ? "dark" : "system"));
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector('html')?.setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
        const handler = (e) => {
            setColorPreference(e.matches ? "dark" : "light");
        };
        prefersDark.addEventListener('change', handler);

        return () => prefersDark.removeEventListener('change', handler);
    }, []);


    return (
        <button
            type="button"
            className="theme-mode-toggle"
            onClick={() => toggleTheme()}
        >
            <ThemeIcon isDark={isDark} isSystem={theme === "system"} />
        </button>
    );
}
