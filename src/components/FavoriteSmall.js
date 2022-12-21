import Modal from "react-modal";
import OutsideClickHandler from "react-outside-click-handler";
import "./styles/favorites-small.scss";
import { helpHttp } from "../helpers/helpHttp";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { vars } from "./variables";
import { Link } from "react-router-dom";
const customStyles = {
  content: {
    transition: "1s ease-out",
    width: "350px",
    height: "450px",
    backgroundColor: "black",
    outline: "none",
  },
  overlay: { zIndex: 1999, backgroundColor: "" },
};

const FavoriteSmall = ({ isActiveFavorites, handleShow }) => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const urlFavorites = `${vars.mySite}favorites/${user.user.id}/false`;
  const urlDelFav = `${vars.mySite}favorites/${user.user.id}`;

  useEffect(() => {
    helpHttp()
      .get(urlFavorites)
      .then((res) => {
        setFavorites(res);
      });
  }, []);

  const hideModal = () => {
    handleShow(false);
    console.log(isActiveFavorites);
  };

  const deleteFavorite = (id) => {
    let options = {
      body: { items: [id] },
      headers: { "content-type": "application/json" },
    };
    helpHttp()
      .del(urlDelFav, options)
      .then((res) => {
        console.log(res);
      });
    const updatedFavs = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFavs);
  };

  return (
    <Modal
      className="modal-favs"
      ariaHideApp={false}
      style={customStyles}
      isOpen={isActiveFavorites}
      //   closeTimeoutMS={200}
    >
      <OutsideClickHandler onOutsideClick={hideModal}>
        <div className="container-favs-small">
          <div className="container-just-favs">
            {favorites &&
              favorites.map((fav, key) => {
                return (
                  <div key={key}>
                    <div className="container-fav">
                      <div
                        className="container-image-fav"
                        style={{
                          backgroundImage: "url(" + fav.main_image + ")",
                        }}
                      >
                        {/* <img className="fav-image" src={fav.main_image} alt="" /> */}
                      </div>
                      <div>
                        <div>{fav.description}</div>
                        <div className="price-fav">${fav.price}</div>
                        <div
                          onClick={() => deleteFavorite(fav.id)}
                          className="link-delete-fav"
                        >
                          Eliminar
                        </div>
                      </div>
                    </div>
                    <hr className="h-re-fav" />
                  </div>
                );
              })}
          </div>
        </div>
        <Link to="/favorites" onClick={hideModal}>
          <div className="all-favs">Ver todos</div>
        </Link>
      </OutsideClickHandler>
    </Modal>
  );
};

export default FavoriteSmall;
