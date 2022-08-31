import AccordianComponent from "../component/Accordian/AccordianComponent/AccordianComponent";
import FooterComponent from "../component/Footer/FooterComponent/FooterComponent";
import HeaderComponent from "../component/header/HeaderComponent/HeaderComponent";
import JumboComponent from "../component/Jumbo/JumboComponent/JumboComponent";
import Separator from "../component/Separator/Separator";

const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <Separator />
      <JumboComponent />
      <AccordianComponent />
      <Separator />
      <FooterComponent />
    </>
  );
};

export default HomePage;
