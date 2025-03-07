import githubIcon from "@/assets/github.svg";
import arrowUpRightSquare from "@/assets/arrow-up-right-from-square.svg";
import FancyCard from "@/components/FancyCard";

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
            <FancyCard className="project-block">
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="cluster">
                    <li>
                        {githubLink && (
                            <a
                                href={githubLink}
                                aria-label={`Github link for the project ${title}`}
                                className="icon monochrome"
                            >
                                <img src={githubIcon} alt="" />
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
                                <img src={arrowUpRightSquare} alt="" />
                                Demo
                            </a>
                        )}
                    </li>
                </ul>
                <ul className="cluster">
                    {getSkillsAsList().map((skill) => (
                        <li className="pill" key={skill}>
                            {skill}
                        </li>
                    ))}
                </ul>
            </FancyCard>
        );
    };
    return (
        <article>
            <h2>Stuff I've worked on</h2>
            <div className="flex-grid cards-block">
                <ProjectListItem
                    title={"nischalabraham.xyz"}
                    description={
                        "Personal website built to showcase my portfolio and experience."
                    }
                    techList={"React, Javascript, HTML, CSS"}
                    githubLink="https://github.com/unknwnlistener/nischalabraham.xyz"
                />
                <ProjectListItem
                    title={"Instagram Story Clone"}
                    description={
                        "Clone of instagram story feature using local storage to show images as a slideshow."
                    }
                    techList={"HTML, CSS, Typescript,React, Git"}
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
