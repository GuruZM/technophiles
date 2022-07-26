import HeaderServices from "./components/header/Header-Services";
import Home from "./components/header/Home";
import Approach from "./components/Approach/Approach";
import AboutCompany from "./components/About/About-Company";
import OurProjects from "./components/Projects/Our-Projects";
import HireUs from "./components/Hire-Us";
import Questions from "./components/Questions";
import Contact from "./components/Contact/Contact";
import WeOffer from "./components/we-offer/We-Offer";
function App() {
  return (
    <div className="App">
      <Home />
      <HeaderServices />
      <Approach />
      <AboutCompany />
      <OurProjects />
      <WeOffer />
      <HireUs />
      <Questions />
      <Contact />
    </div>
  );
}

export default App;
