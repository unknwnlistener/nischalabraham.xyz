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
            <li className="box [ gap-s center-y padding-x-xs padding-y-2xs ] pill">
                <Icon />
                {title}
            </li>
        );
    };
    return (
        <article>
            <h3>Skills</h3>
            <ul className="cluster">
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
