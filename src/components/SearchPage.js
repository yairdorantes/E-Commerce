import "./styles/products-list.scss";
import emptyHeart from "../media/emptyheart.png";
import heart from "../media/heart.png";
import Heart from "./Heart";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { vars } from "./variables";
import { useContext, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { useEffect } from "react";
import AuthContext from "../context/AuthContext";
const SearchPage = () => {
  const { user } = useContext(AuthContext);
  const paramsUrl = useParams();
  const [products, setProducts] = useState([]);
  const [userFavs, setUserFavs] = useState([]);
  //   const [amount, setAmount] = useState(8);
  //   const [skip, setSkip] = useState(0);
  const getProducts = () => {
    const urlGetProducts = `${vars.mySite}search/${paramsUrl.query}`;
    console.log(urlGetProducts);
    helpHttp()
      .get(urlGetProducts)
      .then((response) => {
        setProducts(response);
      });
  };
  useEffect(() => {
    const getFavs = `${vars.mySite}favorites/${user.user.id}/true`;
    helpHttp()
      .get(getFavs)
      .then((res) => {
        setUserFavs(res);
      });
  }, [paramsUrl]);

  useEffect(() => {
    getProducts();
  }, [paramsUrl]);

  const handleHeart = (id) => {
    if (userFavs.includes(id)) {
      setUserFavs(userFavs.filter((fav) => fav !== id));
    } else {
      setUserFavs([...userFavs, id]);
    }
  };

  return (
    <>
      <div className="container-cards-products">
        {products.length > 0 ? (
          products.map((product, index) => {
            return (
              <div key={index} className="card-daisy">
                <figure
                  className="h-44 bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.main_image})` }}
                >
                  <div
                    className="myheart"
                    onClick={() => handleHeart(product.id)}
                  >
                    {/* {console.log(userFavs.includes(product.id), "sisisis")} */}
                    <Heart
                      emptyHeart={emptyHeart}
                      heart={heart}
                      active={userFavs.includes(product.id) ? true : false}
                      id={product.id}
                      changingState={products}
                    />
                  </div>
                </figure>
                <Link className="" to={`/${paramsUrl.section}/${product.id}`}>
                  <div className="card-body">
                    <p>{product.description}</p>
                    <h2 className="card-title">${product.price}</h2>
                    <div className="card-actions justify-end">
                      {/* <button className="btn btn-primary">Ver</button> */}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <div className="search-message">
            No se encontraron productos relacionados a:{" "}
            <span className="query-message">{paramsUrl.query}</span>
          </div>
        )}
      </div>
      <div>.</div>
    </>
  );
};

export default SearchPage;
