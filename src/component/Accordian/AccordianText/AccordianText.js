import "./AccordianText.css";

const AccordianText = ({ children, isOpen, ...restProps }) => {
  return isOpen ? (
    <div className="accordianText" {...restProps}>
      {children}
    </div>
  ) : null;
};

export default AccordianText;
