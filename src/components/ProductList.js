import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, VIEW_PRODUCT } from "../types/Index";
import { addProducts } from "../actions/Index";
//import { Link } from "react-router-dom";
import localhostUtils from "../utils/localhostUtils";
import { addToCart } from "../actions/CartActions";
const ProductList = () => {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.products.products);
  useEffect(() => {
    if (Products.length < 1) {
      dispatch(addProducts());
    }
  }, [dispatch]);
  if (Products.length > 1) {
    const productList = Products.map((p) => (
      <div className="card" key={p.id}>
        <div className="image">
          {p.imageSrc ? (
            <img src={`http://${p.imageSrc}`} loading="lazy" alt="" />
          ) : (
            "No image is provided for this Product"
          )}
          <div className="extra content" style={{ margin: "5px" }}>
            <button
              className="ui primary button"
              onClick={() => {
                localhostUtils.addToLocalStorage(p);
                dispatch(addToCart(p));
                //dispatch({ type: ADD_TO_CART, payload: p });
              }}
            >
              Add to Cart
            </button>
            <button
              className="ui primary button"
              onClick={() => {
                dispatch({ type: VIEW_PRODUCT, payload: p });
                window.open(`/product/${p.id}`, "_blank");
              }}
            >
              View Product
            </button>
            {/*<Link to={`/product/${p.id}`}>Detail</Link>*/}
            <span className="right floated">
              <p>Price {p.price}</p>
            </span>
          </div>
        </div>
      </div>
    ));
    return <div className="ui cards">{productList}</div>;
  } else {
    return <div className="ui active centered inline loader"></div>;
  }
};
export default ProductList;
