import { Button } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./styles.css";

function SingleProduct({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="productContainer">
      <div key={product.id} className="product">
        <img src={product.image} alt={product.name} className="productImage" />
        <h3 className="productName">{product.name}</h3>
        <p className="productPrice">Rs. {product.price.substring(0, 3)}/=</p>
      </div>
      <div className="addButton">
        <Button
          variant="contained"
          style={{
            width: "200px",
            marginTop: "10px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            textAlign: "center", // Added to center text within the button
          }}
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export default SingleProduct;
