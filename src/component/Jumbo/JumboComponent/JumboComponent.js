import Separator from "../../Separator/Separator";
import JumboContainer from "../JumboContainer/JumboContainer";
import "./JumboComponent.css";

const jumboData = [
  {
    title: "Enjoy on your TV.",
    para: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    imgSrc: "../../../images/Jumbo/jumbo1.png",
    alt: "TV-Image",
  },
  {
    title: "Download your shows to watch offline.",
    para: "Save your favourites easily and always have something to watch.",
    imgSrc: "../../../images/Jumbo/jumbo2.jpg",
    alt: "A Girl",
  },
  {
    title: "Watch everywhere.",
    para: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    imgSrc: "../../../images/Jumbo/jumbo3.png",
    alt: "All Streaming Devices",
  },
  {
    title: "Create profiles for children.",
    para: "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
    imgSrc: "../../../images/Jumbo/jumbo4.png",
    alt: "Cartoon",
  },
];

const JumboComponent = ({ children, ...restProps }) => {
  return (
    <div className="jumboComponent" {...restProps}>
      {jumboData.map((item, index) => (
        <div key={index}>
          <JumboContainer
            index={index}
            alignment={index % 2 === 0}
            title={item.title}
            para={item.para}
            imageSrc={item.imgSrc}
            imageAlt={item.alt}
          />
          <Separator />
        </div>
      ))}
    </div>
  );
};

export default JumboComponent;
