
import GithubLogo from "@/assets/GithubLogo";
import LinkedinLogo from "@/assets/LinkedinLogo";
import TwitterXLogo from "@/assets/TwitterXLogo";
export default function Socials() {
    return (
        <ul className="[ cluster ]">
            <li>
                <a
                    href="https://www.github.com/unknwnlistener"
                    title="Github"
                    className="icon monochrome"
                >
                    <GithubLogo />
                    Github
                </a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/in/nischalabraham"
                    title="LinkedIn"
                    className="icon monochrome"
                >
                    <LinkedinLogo />
                    LinkedIn
                </a>
            </li>
            <li>
                <a
                    href="https://x.com/unknwnlistener"
                    title="Twitter/X"
                    className="icon monochrome"
                >
                    <TwitterXLogo />
                    Twitter/X
                </a>
            </li>
        </ul>
    );
}