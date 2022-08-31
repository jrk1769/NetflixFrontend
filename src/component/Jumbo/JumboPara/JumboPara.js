import "./JumboPara.css";
const JumboPara = ({ children, restProps }) => {
  return (
    <h2 className="jumboPara" {...restProps}>
      {children}
    </h2>
  );
};
export default JumboPara;
