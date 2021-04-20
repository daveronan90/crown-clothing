import React from "react";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
} from "./header.styles";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/CartIcon.component";
import CartDropdown from "../cart-dropdown/CartDropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectShowCart } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, showCart, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionDiv as={Link} to="/shop">
          SHOP
        </OptionDiv>
        <OptionDiv as={Link} to="/shop">
          CONTACT
        </OptionDiv>
        {currentUser ? (
          <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
        ) : (
          <OptionDiv as={Link} to="/signin">
            SIGN IN
          </OptionDiv>
        )}
        <CartIcon />
      </OptionsContainer>
      {showCart && <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showCart: selectShowCart,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
