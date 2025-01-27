import githubIcon from "@/assets/github.svg";
import linkedinIcon from "@/assets/linkedin.svg";
import twitterIcon from "@/assets/twitter-x.svg";

export default function Footer() {
    return (
        <footer className="wrapper">
            <h2>Find me here:</h2>
            <ul className="cluster">
                <li>
                    <a
                        href="https://www.github.com/unknwnlistener"
                        title="Github"
                        className="icon link"
                    >
                        <img src={githubIcon} alt="" />
                        Github
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/nischalabraham"
                        title="LinkedIn"
                        className="icon link"
                    >
                        <img src={linkedinIcon} alt="" />
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        href="https://x.com/unknwnlistener"
                        title="Twitter/X"
                        className="icon link"
                    >
                        <img src={twitterIcon} alt="" />
                        Twitter/X
                    </a>
                </li>
            </ul>
        </footer>
    );
}
