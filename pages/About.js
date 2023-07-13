import React from "react";
import AboutPage from "../assets/about.jpg"
import "../style/About.css"

const About = () => {
    return (
        <div className="about">
            <div className="aboutTop" style={{ backgroundImage: `url(${AboutPage})` }}>
                <div className="aboutBottom">
                    <h1>About us</h1>
                    <p>"Here, at Deliciosa, we understand cravings. We know how important it is to get your food fast, and we have a 1-hour delivery guarantee, or you get your money back.
                        While we prepare our food fast, we develop the flavor slowly. Our dough rises over the night, and our meat is always marinated. That's why every chicken tender, every beef skewer, and every bun taste like heaven.
                        Don't let hunger take control of you. Beat it with Deliciosa!"</p>
                </div>
            </div>
        </div>
    )
}

export default About;