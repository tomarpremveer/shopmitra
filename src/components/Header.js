import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
const Header = () => {
  return (
    <div className="ui top attached menu">
      <div className="header item">
        <Link to="/">ShopMitra</Link>
      </div>
      <div className="right menu">
        <div className="item">
          <Link to="/cart">Cart</Link>
        </div>
        <div className="item">
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Header;
