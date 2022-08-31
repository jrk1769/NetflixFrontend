import "./FormLink.css";

const FormLink = ({ children, link, ...restProps }) => {
  return (
    <a className="formLink" {...restProps}>
      {children}
    </a>
  );
};

export default FormLink;
