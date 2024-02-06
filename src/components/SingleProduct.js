import React from "react";

function SingleProduct({ product }) {
  return (
    <div className="products">
      <div key={product.id} className="product">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  );
}

export default SingleProduct;
