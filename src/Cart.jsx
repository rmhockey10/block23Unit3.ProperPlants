import CartItem from "./CartItem.jsx";

export default function Cart({ cart, addToCart }) {
  console.log(cart);
  return (
    <section className="Cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} addToCart={addToCart} cart={cart} />
        ))}
      </ul>
    </section>
  );
}
