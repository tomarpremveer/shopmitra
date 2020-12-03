import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const products = useSelector((state) => state.products.products);
  let { id } = useParams();
  const productToRender = products.filter((p) => {
    return p.id == id;
  });
  if (productToRender[0] !== null) {
    return (
      <div>
        <h1>{productToRender[0].title || "Title of the product"}</h1>
        <h2>{productToRender[0].price || "Price of the product"}</h2>
        <h2>{productToRender[0].id || "Id of the product"}</h2>
      </div>
    );
  } else {
    return <div>Loading the product</div>;
  }
};

export default ProductDetail;
