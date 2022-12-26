import "./styles/sections.scss";
import gift from "../media/gift.png";
import food from "../media/restaurante.png";
import homes from "../media/hogar.png";
import tech from "../media/monitor.png";
import pape from "../media/pape.png";
import { Link } from "react-router-dom";

const sections = [
  {
    id: 1,
    title: "Gifts",
    img: gift,
    txt: "",
    discount: 30,
  },
  {
    id: 1,
    title: "Food",
    img: food,
    txt: "",
    discount: 10,
  },
  {
    id: 1,
    title: "Tech",
    img: tech,
    txt: "",
    discount: 60,
  },
  {
    id: 2,
    title: "Pape",
    img: pape,
    txt: "",
    discount: 40,
  },
  {
    id: 2,
    title: "Home",
    img: homes,
    txt: "",
    discount: 33,
  },
];

const Sections = () => {
  return (
    <>
      <div className="container-sections">
        {sections.map((section, index) => {
          return (
            <Link
              className="link-from-section"
              to={`/products/${section.title.toLowerCase()}/${section.id}`}
              key={index}
            >
              <div className="section-product">
                <img className="section-logo" src={section.img} alt="" />
                <div className="section-title">{section.title}</div>
                {/* <div className="discount-section">{section.discount}% OFF</div> */}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Sections;
