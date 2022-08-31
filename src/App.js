import "./App.css";
import HomePage from "./pages/HomePage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
// import SignInPage from "./pages/SingInPage";

library.add(fas, faTwitter, faFontAwesome);

function App() {
  return (
    <HomePage />
    // <SignInPage />
  );
}

export default App;
