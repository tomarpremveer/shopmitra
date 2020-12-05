import React from "react";
import { REMOVE_FROM_CART } from "../types/Index";
import { useDispatch, useSelector } from "react-redux";
import localhostUtils from "../utils/localhostUtils";
import Flash from "./Flash";
const Cart = () => {
  let mapCartItems = void 0;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  if (cartItems.length >= 1) {
    mapCartItems = cartItems.map((item) => (
      <div className="ui segment" key={item.id}>
        <h4>{item.title || "no title provided for this item"}</h4>
        <h4>{item.price}</h4>
        <h4>{item.id}</h4>
        <button
          className="ui red button"
          onClick={() => {
            localhostUtils.removeFromLocalStorage(item.id);
            dispatch({ type: REMOVE_FROM_CART, payload: item });
          }}
        >
          Delete
        </button>
      </div>
    ));
  }
  return (
    <div style={{ marginTop: "65px" }}>
      {mapCartItems || <h3>There are no items in the cart</h3>}
    </div>
  );
};

export default Cart;
