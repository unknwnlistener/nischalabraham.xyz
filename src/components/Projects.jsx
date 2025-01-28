import githubIcon from "@/assets/github.svg";
import arrowUpRightSquare from "@/assets/arrow-up-right-from-square.svg";

export default function Projects() {
    const ProjectListItem = ({
        title,
        description,
        techList,
        githubLink = "",
        externalLink = "",
    }) => {
        const getSkillsAsList = () => {
            return techList.split(",").map((el) => el.trim());
        };
        return (
            <li className="project-block box">
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
            </li>
        );
    };
    return (
        <article>
            <h2>Stuff I've worked on</h2>
            <ul className="grid">
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
            </ul>
        </article>
    );
}
