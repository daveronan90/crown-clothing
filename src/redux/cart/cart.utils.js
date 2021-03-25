const addItemToCart = (cartItems, cartItemToAdd) => {
  return cartItems.find((item) => item.id === cartItemToAdd.id)
    ? cartItems.map((item) =>
        item.id === cartItemToAdd.id ? { ...item, qty: item.qty + 1 } : item
      )
    : [...cartItems, { ...cartItemToAdd, qty: 1 }];
};

export default addItemToCart;
