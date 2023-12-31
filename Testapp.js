import React, { useState } from "react";
import './Testapp.css';
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import {BrowserRouter , Route,  Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

const Testapp = () => {
  // const [updatedDetails, setUpdatedDetails] = useState(null);

  return (

    <div className="Testapp">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="menu" element={<Menu/>} />
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="cart" element={<Cart/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default Testapp;
