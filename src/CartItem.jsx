
export default function CartItem({ cartItem }) {
    return (
      <li >
        <section className="cartItem">
        <figure>{cartItem.image}</figure>
        <p>{cartItem.name}</p>
        </section>
        <section className="cartItem">
        <button>-</button>
        <p>Qty</p>
        <button>+</button>
        </section>
      </li>
  );
}
