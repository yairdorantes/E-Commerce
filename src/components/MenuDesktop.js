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
import homes from "../media/home.png";

const MenuDesktop = () => {
  let { user, logoutUser } = useContext(AuthContext);
  let { handleVisibility } = useContext(CartContext);
  const [showFavorites, setShowFavorites] = useState(false);
  const [modalSearch, setModalSearch] = useState(false);
  const [passed, setPassed] = useState(false);
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(0);
  const currentUrl = window.location.pathname;

  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };

  // const [bg, setBg] = useState("#000000d5");
  const handleModal = () => {
    setModalSearch(true);
  };
  const handleShowFavorites = () => {
    showFavorites ? setShowFavorites(false) : setShowFavorites(true);
  };
  useEffect(() => {
    if (currentUrl.includes("home")) {
      const handleScroll = () => {
        if (window.scrollY > 600) {
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
      <nav className={!passed ? "bg-trans" : "bg-nav"}>
        <div className="container flex flex-wrap items-center justify-between h-12 mx-auto">
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
                  href="/home"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  <img className="icon-nav" src={homes} alt="" />
                </a>
              </li>
              <li onClick={handleModal}>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <img className="icon-nav" src={searchIcon} alt="" />
                  <Searching
                    isOpening={modalSearch}
                    setIsOpening={setModalSearch}
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <img className="icon-nav" src={userIcon} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleShowFavorites}
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <img className="icon-nav" src={heart} alt="" />
                  <FavoriteSmall
                    isActiveFavorites={showFavorites}
                    handleShow={handleShowFavorites}
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleVisibility}
                  className="block  py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <img className="icon-nav" src={carrito} alt="" />
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
