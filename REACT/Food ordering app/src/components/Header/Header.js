import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Header = (props) => {
  const [isCartOpened, setIsCartOpened] = useState(false);

  const cartHandler = (e) => {
    if (isCartOpened) {
      setIsCartOpened(false);
    } else {
      setIsCartOpened(true);
    }
  };

  return (
    <div>
      <nav className={classes.header}>
        <p>React Meals</p>
        <HeaderCartButton onClick={cartHandler}></HeaderCartButton>
      </nav>
      <div className={classes.mainImage}>
        <img
          src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        ></img>
      </div>
      <div className={classes.summary}>
        <h2>Delicious food Delivered To you</h2>
        <p>Choose your favorite meal from a variety of meals and enjoy</p>
        <p>
          All our meals are cooked with love and care and are arriving just in
          time for you to enjoy them
        </p>
      </div>
      {isCartOpened && <Cart onClose={cartHandler}></Cart>}
    </div>
  );
};

export default Header;
