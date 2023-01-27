import { Link } from "react-router-dom";
export const Page = ({ background, name, logo, primary_color, secondary_color, description, stand, banner }) => {
    return (
        <>
            <div className="header">
                <div className="banner" style={{ background: `linear-gradient(89.87deg, ${background}C 0.12%, rgba(0, 17, 22, 0) 99.85%)` }}>
                </div>
                <h1>{name}</h1>
                <Link to={'/'}>Return to home</Link>
            </div>
            <section className="main">
                <div className="left">
                    <h2>Enjeux</h2>
                    <p>AI faces challenges such as safety, ethics, and societal benefits. By 2030, it may have a significant impact on various aspects of life like transportation, healthcare, education, and economy, but also negative consequences such as social inequality. It is important to consider both benefits and negative consequences.</p>
                    <img src="" alt="" />
                    <p>In addition to the challenges and impact already mentioned, another important consideration for the development and use of AI is the issue of regulation. As AI becomes more advanced and more widely used, it will be crucial to have clear and effective regulations in place to govern its development, deployment, and use. This could include regulations around data privacy, transparency, and accountability for AI systems, as well as guidelines for the safe and ethical use of AI in various industries.</p>
                    <button className="btn-primary">List of exposants</button>
                </div>
                <div className="right">
                </div>
            </section>
        </>
    );
}

