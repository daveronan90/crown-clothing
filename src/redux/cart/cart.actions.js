import cartTypes from "./cart.types";

export const toggleCartDropdown = () => ({
  type: cartTypes.TOGGLE_CART_DROPDOWN,
});

export const addItem = (item) => ({
  type: cartTypes.ADD_ITEM,
  item,
});

export const clearItemFromCart = (item) => ({
  type: cartTypes.CLEAR_ITEM_FROM_CART,
  item,
});

export const removeItem = (item) => ({
  type: cartTypes.REMOVE_ITEM,
  item,
});

export const clearCart = () => ({
  type: cartTypes.CLEAR_CART,
});
