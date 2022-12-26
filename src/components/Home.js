import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import MostLovedProducts from "../components/MostLovedProducts";
import OffersSlider from "../components/OffersSlider";
import Sections from "../components/Sections";
import "../components/styles/menu-desktop.scss";
import "../index.scss";
import store from "../media/store.jpg.jpg";
function Home() {
  return (
    <>
      {/* <MenuDesktop></MenuDesktop> */}
      <div className="container-home flex justify-center items-center text-4xl font-bold ">
        <div className="z-20 w-3/4 text-center lg:w-1/4">
          Why stay hungry when you can order from Bella Onojie
        </div>
      </div>
      <OffersSlider />
      {/* <MostLovedProducts></MostLovedProducts> */}
      {/* <Sections /> */}
      <Footer />
      {/* <ContReducer></ContReducer> */}
    </>
  );
}

export default Home;
