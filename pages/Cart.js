import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Cart.css"
import CartBG from "../assets/cartBG.jpg"
import DeleteIcon from '@mui/icons-material/Delete';
import { PlusSquareOutlined, MinusSquareOutlined } from "@ant-design/icons";

const Cart = () => { 
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const handleDelete = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleUpdateQuantity = (index, action) => {
    const updatedCartItems = [...cartItems];
    const currentQuantity = updatedCartItems[index].quantity;

    if (action === "increase") {
      if (currentQuantity < 10) {
        updatedCartItems[index].quantity++;
      }
    } else if (action === "decrease") {
      if (currentQuantity > 1) {
        updatedCartItems[index].quantity--;
      }
    }

    updatedCartItems[index].totalPrice = updatedCartItems[index].price * updatedCartItems[index].quantity;

    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
  
  const finalPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0);

  return (
    <div className="cart" style={{ backgroundImage: `url(${CartBG})` }}>
      <h1>Cart</h1>
      {cartItems.map((item, index) => (
        <div key={index} className="cartItem">
          <h2>{item.name}</h2>
          <h3>Price: {item.price}</h3>
          <p>Quantity: {item.quantity}</p>
          <div>TotalPrice:{item.totalPrice}</div>
          <div className="buttonAdjust">
            <span onClick={() => handleUpdateQuantity(index, "decrease")}><MinusSquareOutlined/></span>
            <span onClick={() => handleUpdateQuantity(index, "increase")}><PlusSquareOutlined/></span>
            <div  className="delete" onClick={() => handleDelete(index)}><DeleteIcon/>Delete</div>
          </div>
        </div>
      ))}
      <div className="finalPrice">Final Price: {finalPrice}</div>
      <Link to="/menu">
        <button>Back to Menu</button>
      </Link>
    </div>
  );
};

export default Cart;
