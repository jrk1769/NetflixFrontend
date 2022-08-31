import "./AccordianItem.css";

const AccordianItem = ({ children, ...restProps }) => {
  return (
    <div className="accordianItem" {...restProps}>
      {children}
    </div>
  );
};

export default AccordianItem;
