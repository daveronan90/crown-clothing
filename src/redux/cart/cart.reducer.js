import cartTypes from "./cart.types";
import addItemToCart from "./cart.utils";

const INITIAL_STATE = {
  showCart: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        showCart: !state.showCart,
      };
    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.item),
      };
    default:
      return state;
  }
};

export default cartReducer;
