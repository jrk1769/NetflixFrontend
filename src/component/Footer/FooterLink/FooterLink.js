import "./FooterLink.css";

const FooterLink = ({ children, link, ...restProps }) => {
  return (
    <a href={link} className="footerLink" {...restProps}>
      {children}
    </a>
  );
};

export default FooterLink;
