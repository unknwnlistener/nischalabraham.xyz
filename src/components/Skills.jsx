import CodetagIcon from "@/assets/Codetag";
import ReactLogo from "@/assets/ReactLogo";
import JsLogo from "@/assets/JavascriptLogo";
import TsLogo from "@/assets/TypescriptLogo";
import LaravelLogo from "@/assets/LaravelLogo";
import CypressLogo from "@/assets/CypressLogo";
import MysqlLogo from "@/assets/MysqlLogo";

export default function Skills() {
    const ListItem = ({ Icon = CodetagIcon, title }) => {
        return (
            <li className="skill icon">
                <Icon />
                {title}
            </li>
        );
    };
    return (
        <article>
            <h2>Skills</h2>
            <ul className="[ cluster spread ] center-x">
                <ListItem title="HTML & CSS" />
                <ListItem title="Javascript" Icon={JsLogo} />
                <ListItem title="Typescript" Icon={TsLogo} />
                <ListItem title="React" Icon={ReactLogo} />
                <ListItem title="Laravel" Icon={LaravelLogo} />
                <ListItem title="Cypress" Icon={CypressLogo} />
                <ListItem title="MySQL" Icon={MysqlLogo} />
            </ul>
        </article>
    );
}
