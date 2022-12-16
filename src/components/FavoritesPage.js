import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { helpHttp } from "../helpers/helpHttp";
import "./styles/favorites-page.scss";
import { vars } from "./variables";
const FavoritesPage = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [favoritesSelected, setFavoritesSelected] = useState([]);
  const [lengthFavs, setLengthFavs] = useState();
  const urlFavorites = `${vars.mySite}favorites/${user.user.id}/false`;
  const urlDelFav = `${vars.mySite}del-favorites/${user.user.id}`;
  const urlDelOneFav = `${vars.mySite}favorites/${user.user.id}`;
  const urlOnlyIdsFavs = `${vars.mySite}favorites/${user.user.id}/true`;
  useEffect(() => {
    helpHttp()
      .get(urlFavorites)
      .then((res) => {
        setFavorites(res);
      });
    helpHttp()
      .get(urlOnlyIdsFavs)
      .then((res) => {
        setFavoritesSelected(res);
        setLengthFavs(res.length);
      });
  }, []);
  const delOneFav = (id) => {
    let options = {
      body: { items: [id] },
      headers: { "content-type": "application/json" },
    };
    helpHttp()
      .del(urlDelOneFav, options)
      .then((res) => {
        console.log(res);
      });
    const filteredArray = favorites.filter((element) => element.id !== id);

    setFavorites(filteredArray);
  };
  const deleteFavorite = (elements) => {
    let options = {
      body: { items: elements },
      headers: { "content-type": "application/json" },
    };
    helpHttp()
      .del(urlDelFav, options)
      .then((res) => {
        console.log(res);
      });
    const filteredArray = favorites.filter((element) =>
      favoritesSelected.includes(element.id)
    );
    setFavorites(filteredArray);
  };

  const handleCheckBox = (e) => {
    const fav = e.target;
    if (fav.checked) {
      const updatedFavs = favoritesSelected.filter(
        (item) => item !== parseInt(fav.id)
      );
      setFavoritesSelected(updatedFavs);
    } else {
      setFavoritesSelected([...favoritesSelected, parseInt(fav.id)]);
    }
  };

  const handleAllCheckBoxs = (e) => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    if (e.target.checked) {
      checkboxes.forEach((checkbox, index) => {
        if (index > 0) {
          checkbox.checked = true;
        }
      });
      setFavoritesSelected([]);
    } else {
      console.log("here");
      const allBoxs = [];
      checkboxes.forEach((checkbox, index) => {
        if (index > 0) {
          checkbox.checked = false;
          allBoxs.push(parseInt(checkbox.id));
        }
      });
      setFavoritesSelected(allBoxs);
    }
  };
  return (
    <>
      <div className="container-favs-big">
        {favorites.length > 0 ? (
          <div>
            <div className="container-mainBox-btn">
              <input
                className="check-fav"
                type="checkbox"
                onChange={handleAllCheckBoxs}
                checked={favoritesSelected.length === lengthFavs ? false : true}
              />
              <div
                className="btn-del-favs"
                onClick={() => deleteFavorite(favoritesSelected)}
                style={{
                  color:
                    favoritesSelected.length === lengthFavs
                      ? "#3D4D4D"
                      : "#dc3545",
                  pointerEvents:
                    favoritesSelected.length === lengthFavs ? "none" : "",
                  backgroundColor:
                    favoritesSelected.length === lengthFavs ? "" : "#7a081339",
                }}
              >
                Eliminar favoritos seleccionados
              </div>
            </div>
            <hr className="h-re-fav-big" />
          </div>
        ) : (
          <div>nada por aqui</div>
        )}
        {favorites &&
          favorites.map((fav, key) => {
            return (
              <div key={key}>
                <div className="container-fav-big">
                  <input
                    className="check-fav"
                    type="checkbox"
                    id={fav.id}
                    name={fav.id}
                    onChange={handleCheckBox}
                  />
                  <div
                    className="container-image-fav-big"
                    style={{
                      backgroundImage: "url(" + fav.main_image + ")",
                    }}
                  ></div>
                  <div className="container-data-fav-big">
                    <div className="description-fav-big">{fav.description}</div>
                    <div className="price-fav-big">${fav.price}</div>
                    <div
                      onClick={() => {
                        delOneFav(fav.id);
                      }}
                      className="link-delete-fav-big"
                    >
                      Eliminar
                    </div>
                  </div>
                </div>
                <hr className="h-re-fav-big" />
              </div>
            );
          })}
        {/* <Link to="/favorites">
        <div className="all-favs">Ver todos</div>
      </Link> */}
      </div>
    </>
  );
};

export default FavoritesPage;
