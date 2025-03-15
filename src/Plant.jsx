export default function Plant({ plant, addToCart, cart }) {
  console.log(cart);
  return (
    <li>
      <figure>{plant.image}</figure>
      <h3>{plant.name}</h3>
      <button
        onClick={() => {
          addToCart([
            ...cart,
            { id: plant.id, image: plant.image, name: plant.name, quantity: 1 },
          ]);
        }}
      >
        Add to cart
      </button>
    </li>
  );
}
