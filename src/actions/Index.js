import { SIGN_IN, SIGN_OUT, ADD_PRODUCTS, VIEW_PRODUCT } from "../types/Index";
import axios from "axios";
import normalUtils from "../utils/normalUtils";
export const signIn = () => {
  return {
    type: SIGN_IN,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const addProducts = () => async (dispatch, getState) => {
  //const productsInState = getState().products;
  // console.log(productsInState);
  // if (productsInState.length >= 1) return;
  let Products = await axios.get("https://api.npoint.io/2a4561b816e5b6d00894");
  let cleanedProducts = normalUtils.cleanProduct(Products);
  return dispatch({
    type: ADD_PRODUCTS,
    payload: cleanedProducts,
  });
};

export const viewProduct = (product) => {
  return {
    type: VIEW_PRODUCT,
    payload: product,
  };
};
