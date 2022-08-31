import { useState } from "react";
import SubscribeBtn from "../../Forms/Subscribe/SubscribeBtn/SubscribeBtn";
import SubscribeEmail from "../../Forms/Subscribe/SubscribeEmail/SubscribeEmail";
import SubscribeWrapper from "../../Forms/Subscribe/SubscribeWrapper/SubscribeWrapper";
import FeatureTitle from "../../header/FeatureTitle/FeatureTitle";
import AccordianItem from "../AccordianItem/AccordianItem";
import AccordianText from "../AccordianText/AccordianText";
import AccordianTitle from "../AccordinaTitle/AccordianTitle";
import "./AccordianComponent.css";

const accordianData = [
  {
    title: "What is Netflix?",
    textPara1:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.",

    textPara2:
      "You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
  },
  {
    title: "How much does Netflix cost?",
    textPara1:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
    textPara2: "",
  },
  {
    title: "Where can I watch?",
    textPara1:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    textPara2:
      "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    title: "How do I cancel?",
    textPara1:
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.",
    textPara2: "",
  },
  {
    title: "What can I watch on Netflix?",
    textPara1:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    textPara2: "",
  },
  {
    title: "Is Netflix good for kids?",
    textPara1:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
    textPara2:
      "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.",
  },
];

const AccordianComponent = ({ children, ...restProps }) => {
  const [accordianState, setAccordianState] = useState(
    accordianData.map(() => false)
  );

  return (
    <div className="accordianComponent" {...restProps}>
      <h1>Frequently Asked Questions</h1>
      <div className="accordianWrapper">
        {accordianData.map((item, index) => (
          <AccordianItem key={index}>
            <AccordianTitle
              isOpen={accordianState[index]}
              handleClick={() => {
                let currentValue = accordianState[index];
                let newValue = !currentValue;
                let newAccordianState = [...accordianState];
                for (let i = 0; i < accordianState.length; i++) {
                  newAccordianState[i] = false;
                }
                newAccordianState[index] = newValue;
                setAccordianState(newAccordianState);
              }}
            >
              {item.title}
            </AccordianTitle>
            <AccordianText isOpen={accordianState[index]}>
              {item.textPara1}
            </AccordianText>
            <AccordianText isOpen={accordianState[index]}>
              {item.textPara2}
            </AccordianText>
          </AccordianItem>
        ))}
      </div>
      <FeatureTitle className="formHeading">
        Ready to watch? Enter your email to create or restart your membership.
      </FeatureTitle>
      <SubscribeWrapper style={{ marginBottom: "0" }}>
        <SubscribeEmail type="email" placeholder="Email address" />
        <SubscribeBtn>Get Started</SubscribeBtn>
      </SubscribeWrapper>
    </div>
  );
};

export default AccordianComponent;
