import ThemeSelect from "./ThemeSelect";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src="/nalogo.svg" alt="Website logo" />
            <ThemeSelect />
        </nav>
    );
}
