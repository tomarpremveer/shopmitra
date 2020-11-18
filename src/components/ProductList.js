import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../types/Index";
import { addProducts } from "../actions/Index";
import { addExistingElementsToCart } from ".././actions/CartActions.js";
import { addToLocalStorage } from "../utils/utilsfn";
const ProductList = () => {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    if (Products.length < 1) {
      dispatch(addProducts());
    }
    if (cartItems.length < 1) {
      dispatch(addExistingElementsToCart());
    }
  }, [dispatch]);
  if (Products) {
    const productList = Products.map((p) => (
      <div className="card" key={p.id}>
        <div className="image">
          {p.imageSrc ? (
            <img src={`http://${p.imageSrc}`} alt="" />
          ) : (
            "No image is provided for this Product"
          )}
          <div className="extra content" style={{ margin: "5px" }}>
            <button
              className="ui primary button"
              onClick={() => {
                addToLocalStorage(p);
                dispatch({ type: ADD_TO_CART, payload: p });
              }}
            >
              Add to Cart
            </button>
            <span className="right floated">
              <p>Price {p.price}</p>
            </span>
          </div>
        </div>
      </div>
    ));
    return <div className="ui cards">{productList}</div>;
  } else {
    return <div>Loading</div>;
  }
};
export default ProductList;
