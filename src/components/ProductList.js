import "./styles/products-list.scss";
import p1 from "../media/pp1.jpg";
import p2 from "../media/pp2.jpg";
import p3 from "../media/pp3.jpg";
import emptyHeart from "../media/emptyheart.png";
import heart from "../media/heart.png";
import Heart from "./Heart";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Product 1",
    description: "Description of product 1 with another description",
    price: 1.12,
    img: p1,
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description of product 2 when you are camping like boon",
    price: 144.89,
    img: p2,
    discount: 2,
  },
  {
    id: 38,
    title: "Product 3",
    description: "Description of product 3",
    price: 499.99,
    img: p3,
    discount: 10,
  },
];

const ProductList = () => {
  const paramsUrl = useParams();
  console.log(paramsUrl);
  return (
    <>
      <div className="container-cards-products">
        {products.map((product, index) => {
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
                  <h3>
                    ${product.price}
                    {product.discount > 0 && (
                      <span className="discount-card">
                        {product.discount}% OFF
                      </span>
                    )}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
