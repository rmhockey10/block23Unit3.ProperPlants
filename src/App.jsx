import { useState } from "react";
import PLANTS from "./data.js";
import Plants from "./Plants";
import Cart from "./Cart";
import "./index.css";

// const cart = [
//   {
//     id: 1,
//     image: "🌿",
//     name: "Fern",
//   },
//   {
//     id: 2,
//     image: "🌵",
//     name: "Cactus",
//   },
// ];

export default function App() {
  const [cart, addToCart] = useState([]);
  const [plants] = useState(PLANTS);
  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <Plants cart={cart} plants={plants} addToCart={addToCart} />
        <Cart cart={cart} />
      </main>
    </>
  );
}
