import React, { useContext, useState } from "react";
import carrito from "../media/cart.png";
import userIcon from "../media/usuario.png";
import searchIcon from "../media/search.png";
import heart from "../media/heartMenu.png";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import CartContext from "../context/CartContext";
import FavoriteSmall from "./FavoriteSmall";
const MenuDesktop = () => {
  let { user, logoutUser } = useContext(AuthContext);
  let { cartItems, handleVisibility } = useContext(CartContext);
  const [query, setQuery] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);

  const handleShowFavorites = () => {
    showFavorites ? setShowFavorites(false) : setShowFavorites(true);
    console.log("desktop");
  };
  const handleQuerySearch = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <nav>
        <div className="container-menu-desktop">
          <div className="container-menus flex">
            <a className="link-menu-desktop" href="">
              Shop
            </a>
            <a className="link-menu-desktop" href="">
              Company
            </a>
            <a className="link-menu-desktop" href="">
              Store locator
            </a>
          </div>
          <div style={{ marginRight: "8%" }} className="icon-name-commerce">
            My Ecommerce
          </div>
          <div className="container-extra-data flex">
            <Link to={`/search/${query}`}>
              <img
                className="icon-menu-bar-desktop icon-search"
                src={searchIcon}
                alt=""
              />
            </Link>
            <input
              placeholder="Search"
              onChange={handleQuerySearch}
              type="text"
              className="input-search-menu"
            />
            <div>
              <img className="icon-menu-bar-desktop" src={userIcon} alt="" />
              <span>{/* {user.user.name} {user.user.lastname} */}</span>
            </div>
            <div>
              <img
                onClick={handleShowFavorites}
                className="icon-menu-bar-desktop"
                src={heart}
                alt=""
              />
              <FavoriteSmall
                isActiveFavorites={showFavorites}
                handleShow={handleShowFavorites}
              />
            </div>

            <div onClick={handleVisibility}>
              {/* <div className="num-items-in-cart">{items}</div> */}
              <img className="icon-menu-bar-desktop" src={carrito} alt="" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MenuDesktop;
