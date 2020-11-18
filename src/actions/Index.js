import { SIGN_IN, SIGN_OUT, ADD_PRODUCTS } from "../types/Index";
import axios from "axios";
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
  const productsInState = getState().products;
  console.log(productsInState);
  // if (productsInState.length >= 1) return;
  let Products = await axios.get("https://api.npoint.io/2a4561b816e5b6d00894");
  let cleanedProducts = Products.data.map(function (e) {
    let newElement = {
      imageSrc: e.image[0].src,
      price: e.price,
      id: e.articleCode,
      title: e.title,
    };
    return newElement;
  });
  return dispatch({
    type: ADD_PRODUCTS,
    payload: cleanedProducts,
  });
};
