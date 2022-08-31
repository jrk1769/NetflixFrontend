import "./FormTitle.css";

const FormTitle = ({ children, ...restProps }) => {
  return (
    <h1 className="formTitle" {...restProps}>
      {children}
    </h1>
  );
};

export default FormTitle;
