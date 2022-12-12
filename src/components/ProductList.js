import "./styles/products-list.scss";
import p1 from "../media/pp1.jpg";
import p2 from "../media/pp2.jpg";
import p3 from "../media/pp3.jpg";
import emptyHeart from "../media/emptyheart.png";
import heart from "../media/heart.png";
import Heart from "./Heart";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { vars } from "./variables";
import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { useEffect } from "react";

const ProductList = () => {
  const paramsUrl = useParams();
  const [amount, setAmount] = useState(2);
  const [skip, setSkip] = useState(0);
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [indexPage, setIndexPage] = useState(1);
  const getProducts = () => {
    const urlGetProducts = `${vars.mySite}products-list/${skip}/${amount}/${paramsUrl.id}`;
    helpHttp()
      .get(urlGetProducts)
      .then((response) => {
        setProducts(response.products);
        setPagination(Math.ceil(response.count / amount));
      });
  };
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

  return (
    <>
      <div className="container-cards-products">
        {products &&
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
                <div className="myheart">
                  <Heart
                    emptyHeart={emptyHeart}
                    heart={heart}
                    active={false}
                    id={product.id}
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
      {indexPage > 1 && (
        <div
          onClick={() => {
            handlePagination(false);
          }}
        >
          ˂ back
        </div>
      )}
      <div>
        {indexPage} de {pagination}
      </div>
      {indexPage < pagination && (
        <div
          onClick={() => {
            handlePagination(true);
          }}
        >
          next ˃
        </div>
      )}
    </>
  );
};

export default ProductList;
