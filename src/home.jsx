import { Link } from "react-router-dom";
import { Form } from "./components/form";

export const HomePage = ({ data }) => {
    return (
        <div>
            <h1>DWTC - IA FUTURE</h1>
            <p>Add company</p>
            <Form/>
            <h2>Liste des exposants</h2>
            <ul className="list">
                {data.map((project, index) => <li key={index}><Link to={project.link}>{project.name}</Link></li>)}
            </ul>
        </div>
    );
}