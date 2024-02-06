import React, { useContext } from "react";
import Context from "./Context";

function Cart() {
  const { cartItems } = useContext(Context);

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
