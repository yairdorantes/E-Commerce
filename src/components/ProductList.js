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
import Footer from "./Footer";
const ProductList = ({}) => {
  const { user } = useContext(AuthContext);
  const paramsUrl = useParams();

  const [amount, setAmount] = useState(8);
  const [skip, setSkip] = useState(0);
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [indexPage, setIndexPage] = useState(1);
  const [userFavs, setUserFavs] = useState([]);
  const getProducts = () => {
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [handlePagination]);

  return (
    <>
      <div className="container-cards-products ">
        {products &&
          userFavs &&
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
          })}
      </div>
      <div className="container-pagination">
        <div className="btn-group">
          <button
            className={indexPage > 1 ? "color-green" : "hidden-paginator"}
            onClick={() => {
              handlePagination(false);
            }}
          >
            «
          </button>
          <button className="btn text-green-400 ">
            <strong>{indexPage}</strong> de {pagination}
          </button>
          <button
            className={
              indexPage < pagination ? "color-green" : "hidden-paginator"
            }
            onClick={() => {
              handlePagination(true);
            }}
          >
            »
          </button>
        </div>
      </div>
      <div>.</div>
    </>
  );
};

export default ProductList;
