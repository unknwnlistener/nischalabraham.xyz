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
            <li className="[ padding-s ][ experience-block ]">
                <div>
                    <time dateTime={getDateString(startDate)}>
                        {getMonthYear(startDate)}
                    </time>
                    {" "}&mdash;{" "}
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
                            <li className="box pill" key={skill}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </section>
            </li>
        );
    };
    return (
        <article id="experience">
            <h2>Experience</h2>
            <ul className="[ stack box ][ bg-card ]">
                <ExperienceListItem
                    company={"Postal Bible School"}
                    title={
                        "Information and Communications Technology (ICT) Manager"
                    }
                    startDate={"2022-08"}
                    endDate={"2024-12"}
                    description={
                        "I redesigned the existing paper system to a digital solution, providing a learning management system (LMS) to be used by over 3000 students which was built using React and Laravel."
                    }
                    skillsList={
                        "React, Typescript, Tailwind, Laravel, PHP, Cypress, Jest"
                    }
                />
                <ExperienceListItem
                    company={"Media.net(Perform Media)"}
                    title={"Web Application Developer."}
                    startDate={"2017-07"}
                    endDate={"2019-08"}
                    description={
                        "I worked with a core team of 13 people as a frontend developer, developing a statistics dashboard for our advertising partners."
                    }
                    skillsList={"Angular, ASP.NET, SVN, Git"}
                />
            </ul>
        </article>
    );
}
