import Footer from "../components/Footer";
import MenuDesktop from "../components/MenuDesktop";
import MostLovedProducts from "../components/MostLovedProducts";
import OffersSlider from "../components/OffersSlider";
import Sections from "../components/Sections";
import "../components/styles/menu-desktop.scss";

function Home() {
  return (
    <>
      {/* <MenuDesktop></MenuDesktop> */}
      <OffersSlider></OffersSlider>
      <MostLovedProducts></MostLovedProducts>
      <Sections></Sections>
      <Footer></Footer>
    </>
  );
}

export default Home;
