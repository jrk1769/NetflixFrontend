import "./FormText.css";

const FormText = ({ children, ...restProps }) => {
  return (
    <p className="formText" {...restProps}>
      {children}
    </p>
  );
};

export default FormText;
