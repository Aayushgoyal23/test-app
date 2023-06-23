import React, { useState } from "react";
import ContactImage from '../assets/contactpage.jpg';
import "../style/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";


const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact">
            <div className="contactLeft" style={{ backgroundImage: `url(${ContactImage})` }}></div>
            <div className="conactRight">
                <h1>Contact Us:</h1>
                <form onSubmit={handleSubmit}>
                    <label>Full Name</label>
                    <input
                        name="fullName"
                        placeholder="Enter full name..."
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                    />

                    <label>Email</label>
                    <input
                        name="email"
                        placeholder="Enter email..."
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <label>Feedback Message</label>
                    <textarea
                        name="message"
                        placeholder="Enter message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
                <div className="socialLinks">
                    <a href="https://www.youtube.com" className="youtube" target="_blank" title="Youtube"  rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                    <a href="https://www.facebook.com/" className="facebook" target="_blank" title="FaceBook"  rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.twitter.com" className="twitter" target="_blank" title="Twitter" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://www.instagram.com" className="instagram" target="_blank" title="Instagram" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Contact;
