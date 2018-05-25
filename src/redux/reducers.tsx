import { combineReducers } from "redux";

/**
 * Application reducers and exported as combined reducers
 */

import {
  IS_LOADING,
  IS_MESSAGE,
  SET_PRODUCTS,
  SET_PRODUCTS_IDS
} from "../utils/constants";

//  Initial state of reducer
const initialState = {
  loading: false,
  loadingText: "Loading...",
  message: {},
  products: [],
  productsIds: []
};

/**
 * Interfaces for the data types which are being passed
 * in params to the reducer function
 */
interface IState {
  loading: boolean;
  loadingText: string;
  message: object;
  products: any;
  productsIds: any;
}
interface IAction {
  type: string;
  payload: any;
}
/**
 * app reducer
 * @param state initial state of reducer
 * @param action action to a reducer
 */
function app(state: IState = initialState, action: IAction) {
  switch (action.type) {
    case SET_PRODUCTS_IDS:
      return { ...state, productsIds: action.payload };

    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case IS_LOADING:
      const { loading, loadingText } = action.payload;
      if (!loading) {
        return { ...state, loading };
      }
      return { ...state, loading, loadingText, products: [] };
    case IS_MESSAGE:
      let { payload } = action;
      if (!payload.color) {
        payload = { ...payload, color: "green" };
      }
      return { ...state, message: payload };
    default:
      return state;
  }
}

export default combineReducers({
  app
});
