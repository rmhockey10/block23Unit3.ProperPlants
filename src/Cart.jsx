import CartItem from "./CartItem.jsx";

export default function Cart({ cart, addQuantity, removeQuantity }) {
  return (
    <section className="Cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            addQuantity={addQuantity}
            removeQuantity={removeQuantity}
          />
        ))}
      </ul>
    </section>
  );
}
