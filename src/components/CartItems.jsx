import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";

const CartItems = ({ items }) => {
  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="CartItems-items">
        {items.map((item, index) => {
          return <CartItem item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default CartItems;
