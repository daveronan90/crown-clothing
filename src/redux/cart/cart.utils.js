export const addItemToCart = (cartItems, cartItemToAdd) => {
  return cartItems.find((item) => item.id === cartItemToAdd.id)
    ? cartItems.map((item) =>
        item.id === cartItemToAdd.id ? { ...item, qty: item.qty + 1 } : item
      )
    : [...cartItems, { ...cartItemToAdd, qty: 1 }];
};

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter((item) => item.id !== cartItemToRemove.id);
};

export const removeItem = (cartItems, cartItemToRemove) => {
  return cartItems
    .filter((item) => item.id !== cartItemToRemove.id || item.qty > 1)
    .map((item) =>
      item.id === cartItemToRemove.id ? { ...item, qty: item.qty - 1 } : item
    );
};
