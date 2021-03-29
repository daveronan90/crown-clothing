import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/CheckoutItem.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, cartItemsTotal }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">
        <span>TOTAL: €{cartItemsTotal}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
