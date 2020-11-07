import React from "react";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../types/Index";
const ProductList = () => {
  const dispatch = useDispatch();
  return (
    <div className="ui cards">
      <div className="card">
        <div className="image">
          <img
            src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"
            alt=""
          />
          <div className="extra content" style={{ margin: "5px" }}>
            <button
              className="ui primary button"
              onClick={() => dispatch({ type: ADD_TO_CART, payload: 2 })}
            >
              Add to Cart
            </button>
            <span className="right floated">
              <p>Price</p>
            </span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img
            src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"
            alt=""
          />
          <div className="extra content" style={{ margin: "5px" }}>
            <button
              className="ui primary button"
              onClick={() => dispatch({ type: ADD_TO_CART, payload: 3 })}
            >
              Add to Cart
            </button>
            <span className="right floated">
              <p>Price</p>
            </span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img
            src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"
            alt=""
          />
          <div className="extra content" style={{ margin: "5px" }}>
            <button
              className="ui primary button"
              onClick={() => dispatch({ type: ADD_TO_CART, payload: 4 })}
            >
              Add to Cart
            </button>
            <span className="right floated">
              <p>Price</p>
            </span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img
            src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"
            alt=""
          />
          <div className="extra content" style={{ margin: "5px" }}>
            <button className="ui primary button">Add to Cart</button>
            <span className="right floated">
              <p>Price</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
