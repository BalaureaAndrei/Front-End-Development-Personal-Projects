import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes["cart-items"]}>{props.orders || null}</div>
      <div className={classes.total}>
        <p>Total Amount</p>
        <p>{props.totalPrice || 26}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
