import cartTypes from "./cart.types";

const INITIAL_STATE = {
  showCart: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        showCart: !state.showCart,
      };

    default:
      return state;
  }
};

export default cartReducer;
