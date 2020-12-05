import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_EXISTING_CART,
  ADD_PRODUCT_ERROR,
  SET_VISIBILITY,
} from ".././types/Index";
export const addToCart = (item) => (dispatch, getState) => {
  const productsInCart = getState().cart.items;
  console.log(productsInCart);
  const itemAlreadyExists = productsInCart.filter((p) => {
    return p.id === item.id;
  });
  if (itemAlreadyExists.length > 0) {
    return dispatch({
      type: ADD_PRODUCT_ERROR,
      payload: "Item already exists in cart",
    });
  } else {
    console.log("inside the addtocart action");
    return dispatch({
      type: ADD_TO_CART,
      payload: item,
    });
  }
};
export const addToCartError = (message) => {
  return {
    type: ADD_PRODUCT_ERROR,
    payload: message,
  };
};
export const setVisibility = () => {
  return {
    type: SET_VISIBILITY,
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
