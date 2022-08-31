import "./HeaderWrapper.css";
const HeaderWrapper = ({ children, ...restProps }) => {
  return (
    <header className="headerWrapper" {...restProps}>
      {children}
    </header>
  );
};

export default HeaderWrapper;
