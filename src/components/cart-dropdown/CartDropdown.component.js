import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem.component";
import CustomButton from "../custom-button/CustomButton.component";

import "./cart-dropdown.styles.scss";
const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems &&
          cartItems.map((item) => <CartItem key={item.id} item={item} />)}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
