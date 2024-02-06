import React, { useContext } from "react";
import { CartContext } from "./Context";

function CartPage() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - Rs. {item.price.slice(0, 3)}/=
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
