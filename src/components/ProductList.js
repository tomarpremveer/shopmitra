import React /*, { useEffect }**/ from "react";
import { useDispatch } from "react-redux";
//import axios from "axios";
import { ADD_PRODUCTS, ADD_TO_CART } from "../types/Index";
// const addToLocalStorage = function add(item) {
//   localStorage.setItem("items", [].push(item));
// };
const ProductList = () => {
  const dispatch = useDispatch();
  let Products = [
    {
      imgURL:
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",
      price: 567,
      id: 1,
    },
    {
      imgUrl: "",
      price: 657,
      id: 2,
    },
  ];
  dispatch({ type: ADD_PRODUCTS, payload: Products });
  // useEffect(() => {
  //   axios
  //     .get("https://www.fakestoreapi.com/products")
  //     .then((res) => (console.log(res.data), (Products = res.data)))
  //     .catch((err) => console.log(err));
  // }, [Products]);
  const productList = Products.map((p) => (
    <div className="card" key={p.id}>
      <div className="image">
        {p.imgURL ? (
          <img src={p.imgURL} alt="" />
        ) : (
          "No image is provided for this Product"
        )}
        <div className="extra content" style={{ margin: "5px" }}>
          <button
            className="ui primary button"
            onClick={() => dispatch({ type: ADD_TO_CART, payload: p })}
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
};

export default ProductList;
