import Socials from "./Socials";

export default function Footer() {
    return (
        <footer className="footer width-full">
            <div className="[ flex ][ space-between margin-top-4 ]">
                <div className="[ flex align-self-start ][ footer-text ]"><p>© {new Date().getFullYear()} nischalabraham.xyz</p></div>
                <Socials />
            </div>
        </footer>
    );
}
