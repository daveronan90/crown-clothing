import shopTypes from "./shop.types";


export const fetchCollectionsStart = () => ({
  type: shopTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: shopTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});
