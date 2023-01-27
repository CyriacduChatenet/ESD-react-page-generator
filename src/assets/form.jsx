import { useState } from "react";
import data from '../data.json'

export const Form = () => {
    const [credentials, setCredentials] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCredentials({...credentials, [name]: value, link:credentials.name});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        data.push(credentials);
        console.log(data);
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">
                <span>Company name</span>
                <input type="text" name="name" placeholder="Company name" onChange={handleChange} />
            </label>
            <label htmlFor="">
                <span>logo</span>
                <input type="text" name="logo" placeholder="Logo" onChange={handleChange} />
            </label>
            <label htmlFor="">
                <span>Background image</span>
                <input type="text" name="banner_image_url" placeholder="Background image" onChange={handleChange} />
            </label>
            <label htmlFor="">
                <span>description</span>
                <textarea name="description" onChange={handleChange} placeholder="description"  id="" cols="30" rows="10"></textarea>
            </label>
            <label htmlFor="">
                <span>Stand</span>
                <input type="text" name="stand" placeholder="Stand" onChange={handleChange} />
            </label>
            <label htmlFor="">
                <span>Primary color</span>
                <input type="color" name="primary_color" onChange={handleChange} />
            </label>
            <label htmlFor="">
                <span>Secondary color</span>
                <input type="color" name="secondary_color" onChange={handleChange} />
            </label>
            <input type="submit" value="Add company" />
        </form>
    );
};