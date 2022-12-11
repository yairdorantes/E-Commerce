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

// const products = [
//   {
//     id: 1,
//     description: "Description of product 1 with another description",
//     price: 1.12,
//     img: p1,
//   },
//   {
//     id: 2,

//     description: "Description of product 2 when you are camping like boon",
//     price: 144.89,
//     img: p2,
//     discount: 2,
//   },
//   {
//     id: 38,

//     description: "Description of product 3",
//     price: 499.99,
//     img: p3,
//     discount: 10,
//   },
// ];

const ProductList = () => {
  const paramsUrl = useParams();
  const [amount, setAmount] = useState(1);
  const [skip, setSkip] = useState(0);
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    const urlGetProducts = `${vars.mySite}products-list/${skip}/${amount}/${paramsUrl.id}`;
    helpHttp()
      .get(urlGetProducts)
      .then((response) => {
        setProducts(response);
      });
  };
  useEffect(() => {
    getProducts();
    console.log(products);
  }, [amount]);

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
                      backgroundImage: "url(" + product.img + ")",
                    }}
                  ></div>
                </Link>
                <div className="myheart">
                  <Heart emptyHeart={emptyHeart} heart={heart} active={false} />
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
      <div
        onClick={() => {
          setAmount(amount + 5);
          // setSkip(5);
          console.log(products);
        }}
      >
        load more
      </div>
    </>
  );
};

export default ProductList;
