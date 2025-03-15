import CartItem from "./CartItem.jsx";

export default function Cart({ cart }) {
  return (
    <section>
      <h2>Cart</h2>
      <ul>
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      </section>
  );
}
