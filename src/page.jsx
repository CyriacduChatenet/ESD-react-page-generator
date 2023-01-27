import { Link } from "react-router-dom";

export const Page = ({name}) => {
    return (
        <div>
            <h1>{name}</h1>
            <Link to={'/'}>Return to home</Link>
        </div>
    );
}