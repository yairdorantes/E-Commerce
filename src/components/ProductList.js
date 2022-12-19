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
const ProductList = ({ searchType }) => {
  // console.log({ searchType });
  const { user } = useContext(AuthContext);
  const paramsUrl = useParams();

  const [amount, setAmount] = useState(8);
  const [skip, setSkip] = useState(0);
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [indexPage, setIndexPage] = useState(1);
  const [userFavs, setUserFavs] = useState([]);
  const getProducts = () => {
    // http://localhost:4000/api/search/testing
    const urlGetProducts = `${vars.mySite}products-list/${skip}/${amount}/${paramsUrl.id}`;
    helpHttp()
      .get(urlGetProducts)
      .then((response) => {
        // console.log(response);
        setProducts(response.products);
        setPagination(Math.ceil(response.count / amount));
      });
  };

  useEffect(() => {
    const getFavs = `${vars.mySite}favorites/${user.user.id}/true`;
    helpHttp()
      .get(getFavs)
      .then((res) => {
        setUserFavs(res);
      });
  }, []);

  useEffect(() => {
    getProducts();
  }, [skip]);

  const handlePagination = (direction) => {
    if (direction) {
      setSkip(skip + amount);
      setIndexPage(indexPage + 1);
    } else {
      setSkip(skip - amount);
      setIndexPage(indexPage - 1);
    }
  };

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
        {products &&
          userFavs &&
          products.map((product, index) => {
            return (
              <div key={index} className="product-card">
                <Link to={`/${paramsUrl.section}/${product.id}`}>
                  <div
                    className="container-img-product"
                    style={{
                      backgroundImage: "url(" + product.main_image + ")",
                    }}
                  ></div>
                </Link>
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

                <div className="container-info-price">
                  <Link
                    className="link-from-one-product"
                    to={`/${paramsUrl.section}/${product.id}`}
                  >
                    <div className="container-info-product">
                      {/* <h2>{product.title}</h2> */}
                      <p>{product.description}</p>
                    </div>
                  </Link>
                  <hr />
                  <div className="container-price-fav">
                    <div className="price-product-list">
                      ${product.price}
                      {product.discount > 0 && (
                        <span className="discount-card">
                          {product.discount}% OFF
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="container-pagination">
        <div
          className={indexPage > 1 ? "" : "hidden-paginator"}
          onClick={() => {
            handlePagination(false);
          }}
        >
          ˂ Anterior
        </div>

        <div>
          <strong>{indexPage}</strong> de {pagination}
        </div>
        <div
          className={indexPage < pagination ? "" : "hidden-paginator"}
          onClick={() => {
            handlePagination(true);
          }}
        >
          Siguiente ˃
        </div>
      </div>
    </>
  );
};

export default ProductList;
