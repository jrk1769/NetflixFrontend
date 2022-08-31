import "./SubscribeWrapper.css";

const SubscribeWrapper = ({ children, ...restProps }) => {
  return (
    <div className="subscribeWrapper" {...restProps}>
      {children}
    </div>
  );
};

export default SubscribeWrapper;
