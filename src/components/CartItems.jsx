import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";

const CartItems = ({ items }) => {
  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="CartItems-items">
        <CartItem />
      </div>
    </div>
  );
};

export default CartItems;
