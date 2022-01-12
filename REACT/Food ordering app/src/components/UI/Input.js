import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      className={`${classes.input} ${props.className}`}
      type={props.type}
    ></input>
  );
};

export default Input;
