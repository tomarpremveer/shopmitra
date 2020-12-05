import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_VISIBILITY } from "../types/Index";
const Flash = () => {
  const flash = useSelector((state) => state.cart.flash);
  // console.log(flash);
  const [visibility, setVisibility] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (document.querySelector("#close") != null) {
      document
        .querySelector("#close")
        .addEventListener("click", () => dispatch({ type: SET_VISIBILITY }));
    }
  });
  return (
    flash.visibility && (
      <div
        className="ui warning message transition"
        style={{ marginTop: "70px" }}
      >
        <i id="close" className="close icon"></i>
        <div className="header">{flash.type || "No type defined"}</div>
        <div>{flash.message || "No message defined"}</div>
      </div>
    )
  );
};

export default Flash;
