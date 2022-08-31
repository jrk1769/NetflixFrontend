import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SubscribeBtn.css";

const SubscribeBtn = ({ children, ...restProps }) => {
  return (
    <div className="subscribeBtn">
      <a href="./signup" {...restProps}>
        {children}
        <FontAwesomeIcon
          className="subscribeBtnArrow"
          icon="fa-solid fa-angle-right"
        />
      </a>
    </div>
  );
};

export default SubscribeBtn;
