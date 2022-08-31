import FooterComponent from "../component/Footer/FooterComponent/FooterComponent";
import HeaderWrapper from "../component/header/HeaderWrpper/HeaderWrapper";
import Logo from "../component/header/Logo/Logo";
import TopNav from "../component/header/TopNav/TopNav";
import SignIn from "../component/SignIn/SignIn";

const SignInPage = () => {
  return (
    <>
      <HeaderWrapper>
        <TopNav className="topNav">
          <Logo />
        </TopNav>
        <SignIn />
      </HeaderWrapper>
      <FooterComponent />
    </>
  );
};

export default SignInPage;
