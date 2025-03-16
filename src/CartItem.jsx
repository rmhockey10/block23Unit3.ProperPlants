export default function CartItem({ cartItem, addToCart, cart }) {
  const localCart = cartItem.quantity;
  console.log(localCart);
  return (
    <li className="cartListItem">
      <section className="cartItem">
        <figure className="cartImage">{cartItem.image}</figure>
        <p>{cartItem.name}</p>
      </section>
      <section className="cartItem">
        <button className="cartButton">-</button>
        <p>{cartItem.quantity}</p>
        <button
          className="cartButton"
          onClick={() => {
            addToCart([...cart, { quantity: cartItem.quantity + 1 }]);
          }}
        >
          +
        </button>
      </section>
    </li>
  );
}

// {/* <button onClick={() => {
//     addQuantity([
//       ...cart, cart.quantity + 1
//     ]);
//   }}
//   ></button> */}
