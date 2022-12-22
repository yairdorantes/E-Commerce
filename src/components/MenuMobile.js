import "./styles/menu-mobile.scss";
import userIcon from "../media/usuario.png";
import userGrey from "../media/usuario-grey.png";
import searchIcon from "../media/search.png";
import searchGray from "../media/search-grey.png";
import heart from "../media/heartMenu.png";
import heartGrey from "../media/heart-grey.png";
import carrito from "../media/cart.png";
import cartGray from "../media/cart-grey.png";
import homes from "../media/home.png";
import homeGray from "../media/home-grey.png";
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import Searching from "./Searching";

const MenuMobile = () => {
  const [activeIcon, setActiveIcon] = useState(0);
  let { handleVisibility } = useContext(CartContext);
  const [modalSearch, setModalSearch] = useState(false);

  const handleIconClick = (e) => {
    setActiveIcon(e.target.id);
    if (e.target.id == 4) {
      handleVisibility();
    }
  };
  const handleModal = () => {
    modalSearch ? setModalSearch(false) : setModalSearch(true);
  };

  return (
    <>
      <Searching isOpening={modalSearch} setIsOpening={setModalSearch} />
      <div className="container-menu-mobile">
        <div onClick={handleIconClick} id={0}>
          <img
            id={0}
            className="icon-menu-mobile"
            src={activeIcon == 0 ? userIcon : userGrey}
            alt=""
          />
          <hr className={activeIcon == 0 ? "hr-mobile" : "hide-hr"} />
        </div>
        <div onClick={handleIconClick} id={1}>
          <Link to="/favorites">
            <img
              id={1}
              className="icon-menu-mobile"
              src={activeIcon == 1 ? heart : heartGrey}
              alt=""
            />
            <hr className={activeIcon == 1 ? "hr-mobile" : "hide-hr"} />
          </Link>
        </div>
        <div onClick={handleIconClick} id={2}>
          <Link to="/home">
            <img
              id={2}
              className="icon-menu-mobile"
              src={activeIcon == 2 ? homes : homeGray}
              alt=""
            />
          </Link>
          <hr className={activeIcon == 2 ? "hr-mobile" : "hide-hr"} />
        </div>
        <div onClick={handleIconClick} id={3}>
          <img
            id={3}
            onClick={handleModal}
            className="icon-menu-mobile"
            src={activeIcon == 3 ? searchIcon : searchGray}
            alt=""
          />

          <hr className={activeIcon == 3 ? "hr-mobile" : "hide-hr"} />
        </div>

        <div onClick={handleIconClick} id={4}>
          <img
            id={4}
            className="icon-menu-mobile"
            src={activeIcon == 4 ? carrito : cartGray}
            alt=""
          />
          <hr className={activeIcon == 4 ? "hr-mobile" : "hide-hr"} />
        </div>
      </div>
    </>
  );
};

export default MenuMobile;
