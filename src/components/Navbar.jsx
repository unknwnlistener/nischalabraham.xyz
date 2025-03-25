import ThemeToggleButton from "./ThemeToggleButton";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src="/nalogo.svg" alt="Website logo" />
            <ThemeToggleButton />
        </nav>
    );
}
