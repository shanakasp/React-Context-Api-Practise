import React from "react";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";
import Home from "./components/Home";

function App() {
  return (
    <CartProvider>
      <Home />
      <Cart />
    </CartProvider>
  );
}

export default App;
