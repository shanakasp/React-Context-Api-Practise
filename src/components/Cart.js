import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - Rs. {item.price.substring(0, 3)}/=
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
