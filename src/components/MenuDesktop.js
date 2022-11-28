import React from "react";
import carrito from "../media/cart.png";
import userIcon from "../media/usuario.png";
import searchIcon from "../media/search.png";
const MenuDesktop = () => {
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
              <span>Yair master</span>
            </div>
            <div>
              <img className="icon-menu-bar-desktop" src={carrito} alt="" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MenuDesktop;
