import React, { useContext } from "react";
import carrito from "../media/cart.png";
import userIcon from "../media/usuario.png";
import searchIcon from "../media/search.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthContext from "../context/AuthContext";
import CartContext from "../context/CartContext";
const MenuDesktop = () => {
  let { user, logoutUser } = useContext(AuthContext);
  let { cartItems, handleVisibility } = useContext(CartContext);

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
          <div
            style={{ marginRight: "8%" }}
            className="icon-name-commerce flex"
          >
            My Ecommerce
          </div>
          <div className="container-extra-data flex">
            <img
              className="icon-menu-bar-desktop icon-search"
              src={searchIcon}
              alt=""
            />
            <input
              placeholder="Search"
              type="text"
              className="input-search-menu"
            />
            <div>
              <img className="icon-menu-bar-desktop" src={userIcon} alt="" />
              <span>{/* {user.user.name} {user.user.lastname} */}</span>
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
