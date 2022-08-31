import "./Separator.css";

const Separator = ({ children, ...restProps }) => {
  return (
    <div className="separator" {...restProps}>
      {children}
    </div>
  );
};

export default Separator;
