import React from "react";
import Header from "./components/Header/Header";
import MealItem from "./components/Meals/MealItem";
import Context from "./context/Context";

function App() {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  return (
    <Context.Provider value={{}}>
      <Header></Header>
      <MealItem items={DUMMY_MEALS}></MealItem>
    </Context.Provider>
  );
}

export default App;
