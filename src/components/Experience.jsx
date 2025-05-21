import resume from "@/assets/nischal-abraham-resume.pdf";
import ArrowUpRight from "../assets/ArrowUpRight";

export default function Experience() {
    const ExperienceListItem = ({
        company,
        title,
        startDate,
        endDate,
        description,
        skillsList,
    }) => {
        const getMonthYear = (date) => {
            const dateObj = new Date(date);
            return `${dateObj.toLocaleDateString(dateObj, { month: "long", year: "numeric" })}`;
        };
        const getDateString = (date) => {
            return new Date(date).toISOString().split("T")[0];
        };

        const getSkillsAsList = () => {
            return skillsList.split(",").map((el) => el.trim());
        };
        return (
            <li className="experience-block">
                <div>
                    <time dateTime={getDateString(startDate)}>
                        {getMonthYear(startDate)}
                    </time>{" "}
                    &mdash;{" "}
                    <time dateTime={getDateString(endDate)}>
                        {getMonthYear(endDate)}
                    </time>
                </div>
                <section className="stack">
                    <h3>
                        {title} &mdash; {company}
                    </h3>
                    <p>{description}</p>
                    <ul className="cluster">
                        {getSkillsAsList().map((skill) => (
                            <li className="pill" key={skill}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </section>
            </li>
        );
    };
    return (
        <article>
            <h2>Experience</h2>
            <ul className="stack">
                <ExperienceListItem
                    company={"Postal Bible School"}
                    title={
                        "Information and Communications Technology (ICT) Manager"
                    }
                    startDate={"2022-08"}
                    endDate={"2024-12"}
                    description={
                        "Redesigned and migrated the primary website from WordPress to React, enhancing user experience and reducing pages by 60%. Led the development of a digital learning management system (LMS), utilizing React, PHP and Moodle to streamline access for 3000+ students.  Managed cloud server deployment on Cloudways, utilizing GitHub Actions for automated CI/CD workflows."
                    }
                    skillsList={
                        "Laravel, PHP, React, Typescript, Cypress, Jest"
                    }
                />
                <ExperienceListItem
                    company={"Media.net(Perform Media)"}
                    title={"Web Application Developer"}
                    startDate={"2017-07"}
                    endDate={"2019-08"}
                    description={
                        "Improved report access time for publishers by 32% by optimizing Excel and CSV file imports, implementing custom parsing algorithms, and utilizing advanced data processing techniques. Successfully transitioned CI technology from Apache SVN to Git, leading training sessions and creating documentation that reduced collaborative errors."
                    }
                    skillsList={"HTML, CSS, JavaScript, Angular, ASP.NET, Git"}
                />
            </ul>
            <aside className="left-align">
                <a className="icon row monochrome" href={resume}>
                    View Full Resume
                    <ArrowUpRight />
                </a>
            </aside>
        </article>
    );
}
