import classes from "./MealItemForm.module.css";
import { useState } from "react";

const MealItemForm = (props) => {
  const [selectedAmount, setSelectedAmount] = useState("1");

  const amountHandler = (e) => {
    setSelectedAmount(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={formHandler}>
      <label>Amount</label>
      <input
        type="text"
        className={classes.textBox}
        value={selectedAmount}
        onChange={amountHandler}
      ></input>
      <br></br>
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealItemForm;
