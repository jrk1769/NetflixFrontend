import SubscribeBtn from "../../Forms/Subscribe/SubscribeBtn/SubscribeBtn";
import SubscribeEmail from "../../Forms/Subscribe/SubscribeEmail/SubscribeEmail";
import SubscribeWrapper from "../../Forms/Subscribe/SubscribeWrapper/SubscribeWrapper";
import FeatureTitle from "../FeatureTitle/FeatureTitle";
import FeatureWrapper from "../FeatureWrapper/FeatureWrapper";
import HeaderWrapper from "../HeaderWrpper/HeaderWrapper";
import Logo from "../Logo/Logo";
import SigninButton from "../signButton/SigninButton";
import TopNav from "../TopNav/TopNav";

const HeaderComponent = () => {
  return (
    <>
      <HeaderWrapper>
        <TopNav className="topNav">
          <Logo />
          <SigninButton />
        </TopNav>
        <FeatureWrapper className="featureWrapperHome">
          <FeatureTitle className="featureTitleHome">
            Unlimited movies, TV shows and more.
          </FeatureTitle>
          <FeatureTitle className="featureTagHome">
            Watch anywhere. Cancel anytime.
          </FeatureTitle>
          <FeatureTitle className="formHeading">
            Ready to watch? Enter your email to create or restart your
            membership.
          </FeatureTitle>
        </FeatureWrapper>
        <SubscribeWrapper>
          <SubscribeEmail type="email" placeholder="Email address" />
          <SubscribeBtn>Get Started</SubscribeBtn>
        </SubscribeWrapper>
      </HeaderWrapper>
    </>
  );
};

export default HeaderComponent;
