import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_EXISTING_CART,
} from ".././types/Index";
export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};
export const addExistingElementsToCart = () => (dispatch) => {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  //console.log("the cart items" + cartItems);
  return dispatch({
    type: ADD_EXISTING_CART,
    payload: cartItems,
  });
};
export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemId,
  };
};
