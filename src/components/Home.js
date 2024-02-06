// Home.js
import { faker } from "@faker-js/faker";
import React from "react";
import { CartContext } from "./Context";
import SingleProduct from "./SingleProduct";

faker.seed(123);

function Home() {
  const { cart, setCart } = React.useContext(CartContext);

  const productsArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.avatar(),
  }));

  return (
    <div>
      <h1>Home</h1>
      <div className="productContainer">
        {productsArray.map((product) => (
          <SingleProduct
            key={product.id}
            product={product}
            setCart={setCart}
          ></SingleProduct>
        ))}
      </div>
    </div>
  );
}

export default Home;
