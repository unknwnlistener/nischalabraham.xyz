import ThemeSelect from "./ThemeSelect";

export default function Navbar() {
    return (
        <nav className="[ box ] [ space-between padding-4 ] [ navbar ]">
            <div className="flex gap-4">
                {/* <img src="/nalogo.svg" alt="Website logo" /> */}
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
            </div>
            <ThemeSelect />
        </nav>
    );
}
