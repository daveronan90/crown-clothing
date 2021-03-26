import React from "react";
import { connect } from "react-redux";

import "./cartItem.styles.scss";

const CartItem = ({ item: { name, price, qty, imageUrl } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {qty} x €{price}
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
