import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import React from "react";

const ProductContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "20px",
  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
  padding: "10px",
  borderRadius: "5px",
});

const ProductImage = styled("img")({
  width: "150px", // Fixed image size
  height: "150px", // Fixed image size
  marginBottom: "10px",
});

const ProductName = styled("h3")({
  marginBottom: "5px",
});

const ProductPrice = styled("p")({
  fontWeight: "bold",
  marginBottom: "10px",
});

const AddButton = styled(Button)({
  marginTop: "10px",
});

function SingleProduct({ product }) {
  return (
    <ProductContainer>
      <div key={product.id} className="product">
        <ProductImage src={product.image} alt={product.name} />
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price.substring(0, 3)}</ProductPrice>
      </div>
      <AddButton variant="contained">Add to cart</AddButton>
    </ProductContainer>
  );
}

export default SingleProduct;
