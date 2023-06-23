import React, { useState, useEffect } from "react";
// import pizzaLogo from "../assets/pizzaLogo.png"
import Food1 from "../assets/BurgerLogo.png";
import Food2 from "../assets/pizzamenu.png"
import Food3 from "../assets/pastamenu.png"
import Food4 from "../assets/icecreammenu.png"
import Food5 from "../assets/noodlesmenu.png"
import Food6 from "../assets/softdrinkmenu.png"
import MenuBG from "../assets/menubg.png"
import "../style/Menu.css";
import { Link } from "react-router-dom";

const MenuList = [
    {
        name: "Burger",
        image: Food1,
        price: 100,
        quantity: 1,
    },
    {
        name: "Pizza",
        image: Food2,
        price: 200,
        quantity: 1
    },
    {
        name: "Pasta",
        image: Food3,
        price: 80,
        quantity: 1
    },
    {
        name: "Icecream",
        image: Food4,
        price: 140,
        quantity: 1
    },
    {
        name: "Noodles",
        image: Food5,
        price: 220,
        quantity: 1
    },
    {
        name: "Soft drinks",
        image: Food6,
        price: 180,
        quantity: 1
    },
];

const Menu = () => {
    const [menuItems, setMenuItems] = useState(MenuList);
    const [updatedDetails, setUpdatedDetails] = useState(null);
    const [addedToCartIndex, setAddedToCartIndex] = useState(null);

    // const [addCartIndex, setaddCartIndex] = useState(null);

    const updateQuantity = (index, action) => {
        const updatedItems = [...menuItems];
        const currentQuantity = updatedItems[index].quantity;

        if (action === "increase") {
            if (currentQuantity < 10) {
                updatedItems[index].quantity++;
            }
        }
        else if (action === "decrease") {
            if (currentQuantity > 1) {
                updatedItems[index].quantity--;
            }
        }
        setMenuItems(updatedItems);
    };

    const handleBuyNow = (item, index) => {
        const totalPrice = item.price * item.quantity;
        let updatedDetails = { ...item, totalPrice }
        setUpdatedDetails(updatedDetails);

        const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const updatedCartItems = [...existingCartItems, updatedDetails];

        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        setAddedToCartIndex(index);

        console.log(updatedDetails, "buynow");
    };

    return (
        <div className="menu" style={{ backgroundImage: `url(${MenuBG})` }}>
            <h2 className="menuTitle">Our Menu Items</h2>
            <div className="menuList">
                {menuItems.map((item, index) => {
                    const totalPrice = item.price * item.quantity;
                    const isAddedToCart = addedToCartIndex === index;

                    return (
                        <div key={index} className="menuItem">
                            <div style={{ backgroundImage: `url(${item.image})` }}>
                                <h1>{item.name}</h1>
                                <p>₹{totalPrice}</p>
                                <p>Quantity-{item.quantity}</p>
                            </div>
                            <div className="quantityControls">
                                <button
                                    className="decrease"
                                    onClick={() => updateQuantity(index, "decrease")}
                                >
                                    -
                                </button>
                                <button
                                    className="increase"
                                    onClick={() => updateQuantity(index, "increase")}
                                >
                                    +
                                </button>
                                <button
                                    className="buyButton"
                                    onClick={() => handleBuyNow(item, index)}
                                    disabled={isAddedToCart}
                                >
                                    {isAddedToCart ? "Added to Cart" : "Buy Now"}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Link to="/cart">
                <button className="addCart" >Go to Cart</button>
            </Link>
        </div>
    );
};

export default Menu;
