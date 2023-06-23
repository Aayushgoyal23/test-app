import React from "react";
import { Link } from "react-router-dom";
import BackGroundImage from "../assets/background 2.jpg"
import "../style/Home.css"

const Home = () => {
    return (
        <div className="home" style={{backgroundImage : `url(${BackGroundImage})`}}>
            <div className="headerContainer" >
            <h1>Welcome to the Food World</h1>
            <p>You can order your food from here...</p>
            <Link to="/menu">
                <button >Order</button>
            </Link>
            </div>
        </div>
    )
}
export default Home