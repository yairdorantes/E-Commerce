import React, { useContext, useEffect, useState } from "react";
import carrito from "../media/cart.png";
import userIcon from "../media/usuario.png";
import searchIcon from "../media/search.png";
import heart from "../media/heartMenu.png";
import { Link, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import CartContext from "../context/CartContext";
import FavoriteSmall from "./FavoriteSmall";
import Searching from "./Searching";
const MenuDesktop = () => {
  let { user, logoutUser } = useContext(AuthContext);
  let { handleVisibility } = useContext(CartContext);
  const [showFavorites, setShowFavorites] = useState(false);
  const [modalSearch, setModalSearch] = useState(false);
  const [passed, setPassed] = useState(false);
  const [show, setShow] = useState(false);
  const currentUrl = window.location.pathname;
  console.log(currentUrl);
  console.log(currentUrl.includes("home"));

  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };

  // const [bg, setBg] = useState("#000000d5");
  const handleModal = () => {
    modalSearch ? setModalSearch(false) : setModalSearch(true);
  };
  const handleShowFavorites = () => {
    showFavorites ? setShowFavorites(false) : setShowFavorites(true);
  };
  useEffect(() => {
    if (currentUrl.includes("home")) {
      const handleScroll = () => {
        if (window.scrollY > 800) {
          setPassed(true);
        } else {
          setPassed(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setPassed(true);
    }
    console.log("url");
  }, [currentUrl]);

  return (
    <>
      {/* <nav>
        <div
          classNameName="container-menu-desktop"
          style={{
            backgroundColor: !passed ? "" : "#000000d5",
            backdropFilter: passed ? "blur(10px)" : "blur(5px)",
          }}
        >
          <div classNameName="container-menus flex">
            <a classNameName="link-menu-desktop" href="">
              Shop
            </a>
            <a classNameName="link-menu-desktop" href="">
              Company
            </a>
            <a classNameName="link-menu-desktop" href="">
              Store locator
            </a>
          </div>
          <div style={{ marginRight: "8%" }} classNameName="icon-name-commerce">
            Bonyi
          </div>
          <div classNameName="container-extra-data flex">
            <div onClick={handleModal}>
              <img
                classNameName="icon-menu-bar-desktop"
                src={searchIcon}
                alt=""
              />
            </div>

            <Searching isOpening={modalSearch} setIsOpening={setModalSearch} />
            <div>
              <img
                classNameName="icon-menu-bar-desktop"
                src={userIcon}
                alt=""
              />
            </div>
            <div>
              <img
                onClick={handleShowFavorites}
                classNameName="icon-menu-bar-desktop"
                src={heart}
                alt=""
              />
              <FavoriteSmall
                isActiveFavorites={showFavorites}
                handleShow={handleShowFavorites}
              />
            </div>

            <div onClick={handleVisibility}>
              <img classNameName="icon-menu-bar-desktop" src={carrito} alt="" />
            </div>
          </div>
        </div>

      
      </nav> */}
      <nav className={!passed ? "bg-trans" : "bg-nav"}>
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={show ? "true" : "false"}
            onClick={handleShow}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={show ? "bar-tailwind" : "bar-hidden"}
            id="navbar-default"
          >
            <ul className={passed ? "links-tailwind" : "links-trans"}>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MenuDesktop;
