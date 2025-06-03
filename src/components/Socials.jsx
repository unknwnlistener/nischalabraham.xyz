import GithubLogo from "@/assets/GithubLogo";
import LinkedinLogo from "@/assets/LinkedinLogo";
import TwitterXLogo from "@/assets/TwitterXLogo";
import FileDown from "@/assets/FileDown";
import resume from "@/assets/nischal-abraham-resume.pdf";
export default function Socials({ showResume = false }) {
    return (
        <ul className="[ flex ][ center-y gap-m ]">
            {showResume &&
                <li>
                    <a
                        href={resume}
                        title="Download Resume"
                        className="[ box ][ center-y gap-3xs ][ button ]"
                    >
                        Resume
                        <FileDown />
                    </a>
                </li>
            }
            <div className="cluster">
                <li>
                    <a
                        href="https://www.github.com/unknwnlistener"
                        title="Github"
                        className="icon monochrome"
                    >
                        <GithubLogo />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/nischalabraham"
                        title="LinkedIn"
                        className="icon monochrome"
                    >
                        <LinkedinLogo />
                    </a>
                </li>
                <li>
                    <a
                        href="https://x.com/unknwnlistener"
                        title="Twitter/X"
                        className="icon monochrome"
                    >
                        <TwitterXLogo />
                    </a>
                </li>
            </div>
        </ul>
    );
}