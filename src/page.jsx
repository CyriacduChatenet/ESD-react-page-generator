import { Link } from "react-router-dom";

export const Page = ({name, background, background_image}) => {
    return (
        <div>
            <div className="banner" style={{background: `linear-gradient(89.87deg, ${background}C 0.12%, rgba(0, 17, 22, 0) 99.85%)`}}>
            </div>
            <h1>{name}</h1>
            <Link to={'/'}>Return to home</Link>
        </div>
    );
}