import ThemeSelect from "./ThemeSelect";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div>
                {/* <img src="/nalogo.svg" alt="Website logo" /> */}
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
            </div>
            <ThemeSelect />
        </nav>
    );
}
