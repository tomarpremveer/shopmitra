import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//import GoogleAuth from "./GoogleAuth";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { addExistingElementsToCart } from ".././actions/CartActions.js";

const Header = () => {
  const dispatch = useDispatch();
  const numberOfCartItems = useSelector((state) => state.cart.numberOfItems);
  const cartItems = useSelector((state) => state.cart.items);
  useEffect(() => {
    if (cartItems.length < 1) {
      dispatch(addExistingElementsToCart());
    }
    let cartCountElement = document.querySelector("#cartCount");
    cartCountElement.innerHTML = numberOfCartItems;
  }, [dispatch, numberOfCartItems]);

  return (
    <div className="ui fixed top menu">
      <div className="header item">
        <Link to="/">ShopMitra</Link>
      </div>
      <div className="header item">
        <Search></Search>
      </div>
      <div className="right menu">
        <div className="item">
          <Link to="/cart">
            Cart <div id="cartCount" className="ui teal circular label"></div>
          </Link>
        </div>
        <div className="item">{/* <GoogleAuth />  */}</div>
      </div>
    </div>
  );
};

export default Header;
