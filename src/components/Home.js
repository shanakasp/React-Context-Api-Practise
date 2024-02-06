import { faker } from "@faker-js/faker";
import React from "react";

function Home() {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.avatar(),
  }));

  console.log(productsArray);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
