import codetagIcon from "@/assets/codetag.svg";
import reactIcon from "@/assets/react.svg";
import jsIcon from "@/assets/javascript-logo.svg";
import tsIcon from "@/assets/typescript-logo.svg";
import laravelIcon from "@/assets/laravel.svg";
import cypressIcon from "@/assets/cypress.svg";
import mysqlIcon from "@/assets/mysql.svg";

export default function Skills() {
    const ListItem = ({ image = codetagIcon, title }) => {
        return (
            <li className="skill icon">
                <img src={image} alt="" />
                {title}
            </li>
        );
    };
    return (
        <article>
            <h2>Skills</h2>
            <ul className="[ cluster spread ] center-x">
                <ListItem title="HTML & CSS" />
                <ListItem title="Javascript" image={jsIcon} />
                <ListItem title="Typescript" image={tsIcon} />
                <ListItem title="React" image={reactIcon} />
                <ListItem title="Laravel" image={laravelIcon} />
                <ListItem title="Cypress" image={cypressIcon} />
                <ListItem title="MySQL" image={mysqlIcon} />
            </ul>
        </article>
    );
}
