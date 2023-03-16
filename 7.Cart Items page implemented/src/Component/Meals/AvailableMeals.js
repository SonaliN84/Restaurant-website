import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price:100,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 150,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 60,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 80,
  },
];

const AvailableMeals = () => {
  const MealsList = DUMMY_MEALS.map((meals) => (
    // <li>
    //   <h4>{meals.name}</h4>
    //   <p>{meals.description}</p>
    //   <h4>${meals.price}</h4>
    // </li>
    <MealItem
      key={meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
