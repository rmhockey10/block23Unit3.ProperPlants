export default function Plant({ plant, addQuantity }) {
  return (
    <li className="PlantsListItem">
      <figure className="PlantsImage">{plant.image}</figure>
      <h3>{plant.name}</h3>
      <button onClick={() => addQuantity(plant)}>Add to cart</button>
    </li>
  );
}
