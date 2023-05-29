import "./Button.css";

const Button = (props) => {
  return (
    <button
      className="button"
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
