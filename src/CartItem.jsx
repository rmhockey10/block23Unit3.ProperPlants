export default function CartItem({ cartItem, addQuantity, removeQuantity }) {
  return (
    <li className="cartListItem">
      <section className="cartItem">
        <figure className="cartImage">{cartItem.image}</figure>
        <p>{cartItem.name}</p>
      </section>
      <section className="cartItem">
        <button
          className="cartButton"
          onClick={() => {
            removeQuantity(cartItem);
          }}
        >
          -
        </button>
        <p>{cartItem.quantity}</p>
        <button
          className="cartButton"
          onClick={() => {
            addQuantity(cartItem);
          }}
        >
          +
        </button>
      </section>
    </li>
  );
}
