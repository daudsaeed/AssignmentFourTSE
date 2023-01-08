import React from "react";
import "./productItem.style.css";

const ProductItem = ({ product }) => {
  return (
    <div
      key={product._id}
      className="bg-light p-3 border-1 mb-2 productItem"
      style={{ cursor: "pointer" }}
    >
      <h5>{product.name}</h5>
      <p>{product.detail}</p>
    </div>
  );
};

export default ProductItem;
