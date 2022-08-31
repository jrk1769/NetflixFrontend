import "./SignButton.css";

const SignButton = ({ children, ...restProps }) => {
  return (
    <button className="signButtonForm" {...restProps}>
      {children}
    </button>
  );
};

export default SignButton;
