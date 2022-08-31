import JumboImg from "../JumboImg/JumboImg";
import JumboPara from "../JumboPara/JumboPara";
import JumboTitle from "../JumboTitle/JumboTitle";
import "./JumboContainer.css";

const JumboContainer = ({
  children,
  title,
  para,
  index,
  imageSrc,
  imageAlt,
  alignment,
  ...restProps
}) => {
  const videoSrc = [
    "../../../videos/video-tv-in-0819.m4v",
    "../../../videos/video-tv-in-0819.m4v",
  ];
  return (
    <div
      className="jumboContainer"
      style={
        alignment === false
          ? { flexDirection: "row-reverse" }
          : { flexDirection: "row" }
      }
    >
      <div className="jumboTextSide">
        <JumboTitle>{title}</JumboTitle>
        <JumboPara>{para}</JumboPara>
      </div>
      <div className="jumboMixer">
        <JumboImg src={imageSrc} alt={imageAlt} index={index} />
        {index === 0 ? (
          <video autoPlay playsInline muted loop className="videoOverlay1">
            <source src={videoSrc[0]} type="video/mp4" />
          </video>
        ) : index === 2 ? (
          <video
            controls
            autoPlay
            playsInline
            muted
            loop
            className="videoOverlay2"
          >
            <source src={videoSrc[1]} type="video/mp4" />
          </video>
        ) : null}
      </div>
    </div>
  );
};

export default JumboContainer;
