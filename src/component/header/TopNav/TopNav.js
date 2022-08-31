import "./TopNav.css";

const TopNav = ({ children, ...restProps }) => {
  return <nav {...restProps}>{children}</nav>;
};

export default TopNav;
