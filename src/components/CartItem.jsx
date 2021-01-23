import React from "react";
import "./CartItem.css";

const CartItem = () => {
  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img
          src="https://somosmiamioutlet.com/wp-content/uploads/2020/07/12.9-inch-iPad-Pro-Wi-Fi-128GB-Space-Grey_1_iCon.jpg"
          alt=""
        />
      </div>
      <div className="CartItem-info">
        <div className="info-title">
          <h2> Apple Ipad Pro</h2>
        </div>
        <div className="info-stock"> In Stock </div>
        <div className="item-actions">
          <div className="item-quantity">
            <select></select>
          </div>
          <div className="item-delete"></div>
        </div>
      </div>
      <div className="CartItem-price"> $769 </div>
    </div>
  );
};

export default CartItem;
