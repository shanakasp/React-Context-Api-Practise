import { faker } from "@faker-js/faker";
import React, { useState } from "react";
import SingleProduct from "./SingleProduct";

function Home() {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.avatar(),
  }));

  const [product] = useState(productsArray);
  console.log(productsArray);
  return (
    <div>
      <h1>Home</h1>
      <div className="productContainer">
        {product.map((product) => (
          <SingleProduct product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
}

export default Home;
