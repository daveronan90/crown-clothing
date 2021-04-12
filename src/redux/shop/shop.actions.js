import shopTypes from "./shop.types";

export const setCollections = (collections) => ({
  type: shopTypes.SET_COLLECTIONS,
  collections,
});
