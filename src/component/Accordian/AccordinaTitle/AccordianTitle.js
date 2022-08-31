import "./AccordianTitle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AccordianTitle = ({ children, isOpen, handleClick, ...restProps }) => {
  return (
    <div
      className="accordianTitle"
      {...restProps}
      onClick={() => handleClick()}
    >
      {children}
      {!isOpen ? (
        <FontAwesomeIcon icon="fa-solid fa-plus" />
      ) : (
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
      )}
    </div>
  );
};

export default AccordianTitle;
