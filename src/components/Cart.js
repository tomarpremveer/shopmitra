import React from "react";
import { REMOVE_FROM_CART } from "../types/Index";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  let mapCartItems = void 0;
  const cartItems = useSelector((state) => state.cart);
  if (cartItems.length >= 1) {
    mapCartItems = cartItems.map((item) => (
      <div className="ui segment">
        <h4>{item}</h4>
        <button
          className="ui red button"
          onClick={() => dispatch({ type: REMOVE_FROM_CART, payload: item })}
        >
          Delete
        </button>
      </div>
    ));
  }
  return <div>{mapCartItems || <h3>There are no items in the cart</h3>}</div>;
};

export default Cart;
