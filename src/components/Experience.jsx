export default function Experience() {
    const ExperienceListItem = ({
        company,
        title,
        startDate,
        endDate,
        description,
        techStack,
    }) => {
        return (
            <li>
                <p>
                    {title} - {company}
                </p>
                <div>{description}</div>
            </li>
        );
    };
    return (
        <article>
            <h2>Experience</h2>
            <ul className="stack">
                <ExperienceListItem
                    company={"Postal Bible School, Ireland"}
                    title={
                        "Information and Communications Technology (ICT)Manager"
                    }
                    startDate={"August 2022"}
                    endDate={"December 2024"}
                    description={
                        "Redesigned and migrated the primary website from WordPress to React, enhancing user experience and reducing pages by 60%. Led the development of a digital learning management system (LMS), utilizing React, PHP and Moodle to streamline access for 3000+ students.  Managed cloud server deployment on Cloudways, utilizing GitHub Actions for automated CI/CD workflows."
                    }
                    techStack={"Laravel, PHP, React, Typescript, Cypress, Jest"}
                />
                <ExperienceListItem
                    company={"Media.net(Perform Media), Mumbai, India"}
                    title={"Web Application Developer"}
                    startDate={"July 2017"}
                    endDate={"August 2019"}
                    description={
                        "Improved report access time for publishers by 32% by optimizing Excel and CSV file imports, implementing custom parsing algorithms, and utilizing advanced data processing techniques. Successfully transitioned CI technology from Apache SVN to Git, leading training sessions and creating documentation that reduced collaborative errors."
                    }
                    techStack={"HTML, CSS, JS, Angular, ASP.NET MVC, Git"}
                />
            </ul>
        </article>
    );
}
