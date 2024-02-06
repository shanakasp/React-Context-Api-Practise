import React, { useContext } from "react";
import { CartContext } from "./Context";
import SingleProduct from "./SingleProduct";

function CartPage() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="productContainer">
          {cart.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CartPage;
