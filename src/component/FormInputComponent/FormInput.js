import "./FormInput.css";

const FormInput = ({ ...restProps }) => {
  return <input className="formInput" {...restProps} />;
};

export default FormInput;
