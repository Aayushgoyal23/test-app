import React from "react";
import NavbarLogo from "../assets/logo.jpg"
import { Link } from "react-router-dom";
import "../style/Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="leftside">
                <img className="imgWidth" src={NavbarLogo} />
            </div>
            <div className="rightside">
                <div className="link">
                <Link to="/">Home </Link>
                <Link to="/menu"> Menu </Link>
                <Link to="/cart"> Cart </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
