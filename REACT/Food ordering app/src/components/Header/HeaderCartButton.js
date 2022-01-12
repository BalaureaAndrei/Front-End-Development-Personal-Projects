import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <CartIcon className={classes.icon}></CartIcon>Your Cart
    </button>
  );
};

export default HeaderCartButton;
