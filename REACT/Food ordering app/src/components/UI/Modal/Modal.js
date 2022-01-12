import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
      <div className={classes.modal}>{props.children}</div>
    </div>
  );
};

export default Modal;
