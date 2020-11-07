import {
  SIGN_IN,
  SIGN_OUT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../types/Index";

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

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemId,
  };
};
