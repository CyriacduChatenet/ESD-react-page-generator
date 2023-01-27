import { Link } from "react-router-dom";

export const HomePage = ({ data }) => {
    return (
        <div>
            <h1>Liste des exposants</h1>
            <ul className="list">
                {data.map((project, index) => <li key={index}><Link to={project.link}>{project.name}</Link></li>)}
            </ul>
        </div>
    );
}