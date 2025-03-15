// import { useState } from "react";
import Plants from "./Plants";
import Cart from "./Cart";
import "./index.css"

const cart = [
  {
    id: 1,
    image: "🌿",
    name: "Fern",
  },
  {
    id: 2,
    image: "🌵",
    name: "Cactus",
  },
];

export default function App() {
  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <Plants />
        <Cart cart={cart} />
      </main>
    </>
  );
}
