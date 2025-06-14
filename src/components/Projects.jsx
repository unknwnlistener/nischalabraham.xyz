import GithubLogo from "@/assets/GithubLogo";
import Globe from "../assets/Globe";

export default function Projects() {
    const ProjectListItem = ({
        title,
        description,
        techList,
        githubLink = "",
        externalLink = "",
    }) => {
        const getSkillsAsList = () => {
            return techList
                .split(",")
                .map((el) => el.trim())
                .filter((el) => el);
        };
        return (
            <div className="[ bg-card fancy-anchors ][ card ]">
                <div className="project__card">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <ul className="cluster">
                        {getSkillsAsList().map((skill) => (
                            <li className="box pill" key={skill}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                    <ul className="flex gap-2xs highlight-active-hover">
                        <li>
                            {githubLink && (
                                <a
                                    href={githubLink}
                                    aria-label={`Github link for the project ${title}`}
                                    className="icon monochrome"
                                >
                                    <GithubLogo />
                                    Github
                                </a>
                            )}
                        </li>
                        <li>
                            {externalLink && (
                                <a
                                    href={externalLink}
                                    aria-label={`External link for the project ${title}`}
                                    className="icon monochrome"
                                >
                                    <Globe />
                                    Live
                                </a>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
    return (
        <article id="projects">
            <h2>Projects</h2>
            <div className="grid cards-block">
                <ProjectListItem
                    title={"Postal Bible School"}
                    description={
                        "Correspondence education platform website with Auth and LMS functionality"
                    }
                    techList={"React, Typescript, Laravel, Auth0, Cloudways"}
                    externalLink="https://postalbibleschool.ie"
                />
                <ProjectListItem
                    title={"Fairview Hall Church"}
                    description={
                        "Full redesign and development of webpage for local church that needed a revamp."
                    }
                    techList={"HTML, CSS, JavaScript"}
                    externalLink="https://fairviewhall.ie/"
                />
                <ProjectListItem
                    title={"Portfolio Website"}
                    description={
                        "You're here already!"
                    }
                    techList={"React, HTML, CSS"}
                    githubLink="https://github.com/unknwnlistener/nischalabraham.xyz"
                />
                <ProjectListItem
                    title={"Instagram Story Clone"}
                    description={
                        "Clone of instagram story feature using local storage to show images as a slideshow."
                    }
                    techList={"Typescript,React, Git"}
                    githubLink="https://github.com/unknwnlistener/roadmap-story-feature"
                    externalLink="https://roadmap-story-feature.vercel.app"
                />
                <ProjectListItem
                    title={"Kanban Task Manager"}
                    description={
                        "Kanban task management board built with Next.js"
                    }
                    techList={"Next.js, React Redux, Typescript "}
                    githubLink="https://github.com/unknwnlistener/kanban-task-manager"
                    externalLink="https://kanban-task-manager-nu.vercel.app/"
                />
            </div>
        </article>
    );
}
