import classes from "./MealItem.module.css";
import Card from "../UI/Card";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <Card className={classes.meals}>
      <ul>
        {props.items.map((meals) => {
          return (
            <li key={meals.id} className={classes.meal}>
              <h3>{meals.name}</h3>
              <p className={classes.description}>{meals.description}</p>
              <p className={classes.price}>{meals.price}</p>
              <MealItemForm></MealItemForm>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default MealItem;
