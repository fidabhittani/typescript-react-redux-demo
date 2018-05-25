/**
 * Application redux store with configured middlewares and sagas and reducers.
 */

import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleWare = createSagaMiddleware();

// Tweak to make the chrome dev tools work in chrome. devtools breaks in Reduxv4.0
declare module "redux" {
  export type GenericStoreEnhancer = any;
}

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);
sagaMiddleWare.run(rootSaga);

export default store;
