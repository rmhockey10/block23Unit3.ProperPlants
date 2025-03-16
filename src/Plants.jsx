import Plant from "./Plant.jsx";

export default function Plants({ addToCart, plants, cart }) {
  return (
    <section className="Plants">
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => (
          <Plant
            key={plant.id}
            plant={plant}
            addToCart={addToCart}
            cart={cart}
          />
        ))}
      </ul>
    </section>
  );
}
