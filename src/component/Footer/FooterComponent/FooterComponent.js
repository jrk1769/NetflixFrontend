import FooterLink from "../FooterLink/FooterLink";
import "./FooterComponent.css";

const FooterComponent = ({ children, ...restProps }) => {
  return (
    <div className="footerSection">
      <div className="footerWrapper">
        <p className="footerText">
          Questions? Call{" "}
          <FooterLink className="footerNumber">000-800-040-1843</FooterLink>
        </p>
        <div className="footerWrapperGrid">
          <div className="footerColumn">
            <FooterLink link="./#">FAQ</FooterLink>
            <FooterLink link="./#">Investor Relations</FooterLink>
            <FooterLink link="./#">Privacy</FooterLink>
            <FooterLink link="./#">Speed Test</FooterLink>
          </div>
          <div className="footerColumn">
            <FooterLink link="./#">Help Center</FooterLink>
            <FooterLink link="./#">Jobs</FooterLink>
            <FooterLink link="./#">Cookie Preferences</FooterLink>
            <FooterLink link="./#">Legal Notices</FooterLink>
          </div>
          <div className="footerColumn">
            <FooterLink link="./#">Accounts</FooterLink>
            <FooterLink link="./#">Ways To Watch</FooterLink>
            <FooterLink link="./#">Corporate Information</FooterLink>
            <FooterLink link="./#">Only On Netflix</FooterLink>
          </div>
          <div className="footerColumn">
            <FooterLink link="./#">Media Center</FooterLink>
            <FooterLink link="./#">Terms Of Use</FooterLink>
            <FooterLink link="./#">Contact Us</FooterLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
