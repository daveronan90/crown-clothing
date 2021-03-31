import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [logger];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
export const persitor = persistStore(store);

export default store;
