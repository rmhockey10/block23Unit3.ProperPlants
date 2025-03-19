import { useState } from "react";
import PLANTS from "./data.js";
import Plants from "./Plants";
import Cart from "./Cart";
import "./index.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [plants] = useState(PLANTS);

  function addQuantity(plant) {
    const itemExist = cart.find((cartItem) => {
      return cartItem.id === plant.id;
    });
    if (itemExist) {
      const updatedCart = cart.map((cartItem) => {
        if (plant.id !== cartItem.id) {
          return cartItem;
        } else {
          const increaseQuantity = {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
          return increaseQuantity;
        }
      });
      setCart(updatedCart);
    } else {
      const createCartItem = { ...plant, quantity: 1 };
      setCart([...cart, createCartItem]);
    }
  }

  function removeQuantity(cartItem) {
    if (cartItem.quantity > 1) {
      const subtractedQuantity = {
        ...cartItem,
        quantity: cartItem.quantity - 1,
      };

      const newCart = cart.map((item) => {
        if (item.id === cartItem.id) {
          return subtractedQuantity;
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      const newCart = cart.filter((item) => {
        if (cartItem.id !== item.id) {
          return item;
        }
      });
      setCart(newCart);
    }
  }

  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <Plants cart={cart} plants={plants} addQuantity={addQuantity} />
        <Cart
          cart={cart}
          addQuantity={addQuantity}
          removeQuantity={removeQuantity}
        />
      </main>
    </>
  );
}
