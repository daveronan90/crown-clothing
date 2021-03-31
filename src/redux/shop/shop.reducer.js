import SHOP_DATE from "../../fixtures/shopData";

const INITIAL_STATE = {
  collections: SHOP_DATE,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
