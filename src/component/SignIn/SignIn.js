import FormInput from "../FormInputComponent/FormInput";
import FormLink from "../Forms/FormLinks/FormLink";
import FormText from "../Forms/FormText/FormText";
import FormTitle from "../Forms/FormTitle/FormTitle";
import SignButton from "../SignButton/SignButton";
import "./SignIn.css";

const SignIn = ({ children, ...restProps }) => {
  return (
    <div className="signInFormWrapper" {...restProps}>
      <form className="signInForm">
        <FormTitle>Sign In</FormTitle>
        <FormInput type="text" placeholder="Email Address" />
        <FormInput type="password" placeholder="Password" autoComplete="off" />
        <SignButton>Sign In</SignButton>
        <FormText>
          New to Netflix? <FormLink href="./#">Sign up now</FormLink>
        </FormText>
        <FormText className="formCaptcha">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <FormLink className="captchaLink" href="./#">
            Learn more.
          </FormLink>
        </FormText>
      </form>
    </div>
  );
};

export default SignIn;
