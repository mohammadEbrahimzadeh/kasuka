import "./css/base.css";
import HamburgerMenu from "./component/HamburgerMenu/HamburgerMenu";
import Header from "./component/Header/Header";
import CompanyDetails from "./component/CompanyDetails/CompanyDetails";
import Slider from "./component/Slider/Slider";
import Ads from "./component/Ads/Ads";
import Services from "./component/Services/Services";
import WorkCall from "./component/WorkCall/WorkCall";
import WorkSamples from "./component/WorkSamples/WorkSamples";
import Statistics from "./component/Statistics/Statistics";
import OwnerShip from "./component/OwnerShip/OwnerShip";
import Teams from "./component/Teams/Teams";
import Map from "./component/Map/Map";
import Form from "./component/Form/Form";
import Footer from "./component/Footer/Footer";
import Maker from "./component/Maker/Maker";

function App() {
  return (
    <>
      <HamburgerMenu></HamburgerMenu>

      <Header></Header>
      <CompanyDetails></CompanyDetails>
      <Slider></Slider>
      <Ads></Ads>
      <Services></Services>
      <WorkCall></WorkCall>
      <WorkSamples></WorkSamples>
      <Statistics></Statistics>
      <OwnerShip></OwnerShip>
      <Teams></Teams>
      <Map></Map>
      <Form></Form>
      <Footer></Footer>
      <Maker></Maker>
    </>
  );
}

export default App;
