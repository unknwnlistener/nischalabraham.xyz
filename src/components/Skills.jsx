import codetagIcon from "@/assets/codetag.svg";
import reactIcon from "@/assets/react.svg";
import jsIcon from "@/assets/javascript-logo.svg";
import tsIcon from "@/assets/typescript-logo.svg";
import laravelIcon from "@/assets/laravel.svg";

export default function Skills() {
    const ListItem = ({ image = codetagIcon, title }) => {
        return (
            <li className="icon">
                <img src={image} alt="" />
                {title}
            </li>
        );
    };
    return (
        <article>
            <h2>Skills</h2>
            <ul className="cluster center-x">
                <ListItem title="HTML & CSS" />
                <ListItem title="Javascript" image={jsIcon} />
                <ListItem title="Typescript" image={tsIcon} />
                <ListItem title="React" image={reactIcon} />
                <ListItem title="Laravel" image={laravelIcon} />
            </ul>
        </article>
    );
}
