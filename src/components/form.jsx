import { useState } from "react";

export const Form = () => {
    const [credentials, setCredentials] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCredentials({...credentials, [name]: value});
    };

    return (
        <form action="">
            <label htmlFor="">
                <span>Company name</span>
                <input type="text" name="name" placeholder="Company name" onChange={handleChange} />
            </label>
            <label htmlFor="">
                <span>Background image</span>
                <input type="text" name="banner_image_url" placeholder="Background image" onChange={handleChange} />
            </label>
            <label htmlFor="">
                <span>Color</span>
                <input type="color" name="background" onChange={handleChange} />
            </label>
            <input type="submit" value="Add company" />
        </form>
    );
};