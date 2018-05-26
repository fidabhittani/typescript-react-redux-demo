/**
 * Application redux actions
 */
import {
  GET_PRODUCTS,
  GET_PRODUCTS_IDS,
  IS_LOADING,
  IS_MESSAGE,
  SET_PRODUCTS,
  SET_PRODUCTS_IDS,
  SORT_PRODUCTS
} from "../utils/constants";

/**
 * Get Product action
 */
export const getProducts = (payload: any) => {
  return {
    payload,
    type: GET_PRODUCTS
  };
};
/**
 * Set Product action
 */
export const setProducts = (payload: any) => {
  return {
    payload,
    type: SET_PRODUCTS
  };
};
/**
 * Set ProductIDS action
 */
export const setProductIds = (payload: any) => {
  return {
    payload,
    type: SET_PRODUCTS_IDS
  };
};
/**
 * Get ProductIds action
 */
export const getProductIds = () => {
  return {
    type: GET_PRODUCTS_IDS
  };
};
/**
 * is loader action
 */
export const isLoading = (
  loading: boolean,
  loadingText: string = "Loading..."
) => {
  return {
    payload: {
      loading,
      loadingText
    },
    type: IS_LOADING
  };
};
/**
 * App Messages action
 */
export const isMessage = (payload: any) => {
  return {
    payload,
    type: IS_MESSAGE
  };
};
/**
 * Products Sort action
 */
export const sortProducts = (payload: string) => {
  return {
    payload,
    type: SORT_PRODUCTS
  };
};
