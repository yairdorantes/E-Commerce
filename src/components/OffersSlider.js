import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../media/offer1.jpg";
import img2 from "../media/offer2.jpg";
import { Pagination, Navigation, Autoplay } from "swiper";
import "./styles/offers-slide.scss";
import { useEffect, useState } from "react";
import { vars } from "./variables";
import { helpHttp } from "../helpers/helpHttp";
import { Link } from "react-router-dom";

const sections = [
  {
    id: 1,
    title: "Gifts",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
    txt: "",
    discount: 30,
  },
  {
    id: 1,
    title: "Food",
    img: img2,
    txt: "",
    discount: 10,
  },
  {
    id: 1,
    title: "Tech",
    img: img1,
    txt: "",
    discount: 60,
  },
  {
    id: 2,
    title: "Pape",
    img: img2,
    txt: "",
    discount: 40,
  },
  {
    id: 2,
    title: "Home",
    img: img1,
    txt: "",
    discount: 33,
  },
];
const OffersSlider = () => {
  const [offers, setOffers] = useState([]);
  console.log(`${vars}/offers`);
  useEffect(() => {
    helpHttp()
      .get(`${vars.mySite}/offers`)
      .then((res) => {
        setOffers(res);
        console.log(res);
      });
  }, []);

  return (
    <>
      {/* <img src={offersImg.offer1.img} alt="" /> */}
      {/* <div className="container-offers">offer</div> */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // pagination={{
        //   type: "bullets",
        // }}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="SwiperOffers"
      >
        {sections &&
          sections.map((section, key) => {
            return (
              <SwiperSlide key={key} className="flex justify-center">
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                  <figure>
                    <img src={section.img} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-white">{section.title}</h2>
                    <p className="text-white">
                      If a dog chews shoes whose shoes does he choose?
                    </p>
                    <div className="card-actions justify-end">
                      <Link
                        to={`/products/${section.title.toLowerCase()}/${
                          section.id
                        }`}
                      >
                        <button className="btn btn-primary">Buy Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default OffersSlider;
