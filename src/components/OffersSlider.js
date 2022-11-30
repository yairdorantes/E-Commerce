import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../media/offer1.jpg";
import img2 from "../media/offer2.jpg";
import { Pagination, Navigation, Autoplay } from "swiper";
import "./styles/offers-slide.scss";
const offersImg = [img1, img2, img1];

// offersImg.map((offer) => {
//   console.log(offer);
// });

const OffersSlider = () => {
  return (
    <>
      {/* <img src={offersImg.offer1.img} alt="" /> */}
      {/* <div className="container-offers">offer</div> */}
      <Swiper
        pagination={{
          type: "bullets",
        }}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="SwiperOffers"
      >
        {offersImg.map((img, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="container-offer">
                <div
                  className="container-img-slide"
                  style={{
                    backgroundImage: "url(" + img + ")",
                  }}
                ></div>
                <div>title</div>
              </div>
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default OffersSlider;
