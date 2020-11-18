import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//import GoogleAuth from "./GoogleAuth";
import Search from "./Search";
import { useSelector } from "react-redux";
const Header = () => {
  const numberOfCartItems = useSelector((state) => state.cart.numberOfItems);
  useEffect(() => {
    let cartCountElement = document.querySelector("#cartCount");
    //console.log(cartCountElement);
    cartCountElement.innerHTML = numberOfCartItems;
  }, [numberOfCartItems]);
  return (
    <div className="ui top attached menu">
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
