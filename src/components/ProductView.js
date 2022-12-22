import "./styles/product-view.scss";
import { useEffect, useState, useContext } from "react";
import GenerateStars from "./GenerateStars";
import CartContext from "../context/CartContext";
import { helpHttp } from "../helpers/helpHttp";
import { useParams } from "react-router-dom";
import { vars } from "./variables";
import Reviews from "./Reviews";

const ProductView = () => {
  let { addToCart } = useContext(CartContext);
  const paramsUrl = useParams();
  const productId = paramsUrl.id;
  const urlProduct = `${vars.mySite}product/${paramsUrl.id}`;
  const [product, setProduct] = useState({});
  const [imgSrc, setImgSrc] = useState(product.main_image);
  const [stock, setStock] = useState(product.stock);
  const [imgSelected, setImgSelected] = useState(0);
  const [quantityChoosen, setQuantity] = useState(1);

  useEffect(() => {
    helpHttp()
      .get(urlProduct)
      .then((res) => {
        setProduct(res);
        console.log(res);
      });
  }, []);

  const setImage = (e) => {
    setImgSrc(e.target.getAttribute("image"));
    setImgSelected(e.target.id);
  };
  const increment = () => {
    quantityChoosen < product.stock && setQuantity(quantityChoosen + 1);
  };
  const decrement = () => {
    quantityChoosen > 1 && setQuantity(quantityChoosen - 1);
  };
  const sendItem = (product) => {
    const keys = [
      "id",
      "stock",
      "price",
      "quantity",
      "main_image",
      "description",
    ];
    const entries = Object.entries(product).filter(([key]) =>
      keys.includes(key)
    );
    const newObject = Object.fromEntries(entries);

    addToCart(newObject, quantityChoosen);
  };

  return (
    <>
      <div className="container-product-view">
        <div className="container-imgs">
          <div className="container-main-img">
            <img src={imgSrc || product.main_image} alt="" />
          </div>
          <div className="container-mini-images">
            <div
              className="container-main-image-product-view"
              id={0}
              image={product.main_image}
              style={{
                backgroundImage: "url(" + product.main_image + ")",
                filter:
                  imgSelected == 0 ? "brightness(100%)" : "brightness(60%)",
                border:
                  imgSelected == 0
                    ? "2px solid #3483fa"
                    : "2px solid rgba(0, 0, 0, 0)",
              }}
              onClick={setImage}
            ></div>

            {product.extra_images &&
              product.extra_images.map((image, id) => {
                return (
                  <div
                    className="extra-images"
                    style={{
                      backgroundImage: "url(" + image + ")",

                      filter:
                        imgSelected == id + 1
                          ? "brightness(100%)"
                          : "brightness(60%)",
                      border:
                        imgSelected == id + 1
                          ? "2px solid #3483fa"
                          : "2px solid rgba(0, 0, 0, 0)",
                    }}
                    key={id}
                    id={id + 1}
                    onClick={setImage}
                    image={image}
                    alt=""
                  ></div>
                );
              })}
          </div>
        </div>
        <div className="container-product-info-view">
          <div className="how-many-sold">{product.sales} Vendidos</div>
          <div className="product-title">{product.description}</div>
          <div className="container-stars">
            {product.rate_count > 0 && (
              <GenerateStars
                fullStars={Math.floor(product.rate / product.rate_count)}
              />
            )}
            <span>{`(${product.rate_count})`}</span>
          </div>
          <div className="price-product-view">
            <div className="under-price">${product.price}</div>
            {/* HANDLE ITEMS */}
            <div className="container-add-dicrement">
              {/* <ChoosingQuantity stock={stock} /> */}
              <div className="choose-quantity">
                <div className="btns-quantity">
                  <button onClick={decrement} className="btn-quantity">
                    -
                  </button>
                  <div className="quantity-choosen">
                    <strong>{quantityChoosen}</strong>
                  </div>
                  <button
                    // style={{ filter: "brightness(63%)" }}
                    onClick={increment}
                    className="btn-quantity"
                  >
                    +
                  </button>
                </div>
                <div className="stock-info">{`(${product.stock} disponibles)`}</div>
              </div>
            </div>
            {/* ENDS HANDLE ITEMS */}
          </div>
          <div className="container-buttons-buy-add">
            <button className="btn-buy-now">Comprar Ahora</button>
            <button
              onClick={() => {
                sendItem(product);
              }}
              className="btn-add-cart"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
      <div className="container-features-details">
        <div className="descrip-title">Descripcion</div>
        <div className="info-product">
          <p>{product.details}</p>
        </div>
      </div>
      {product && <Reviews product={productId} state={product} />}
    </>
  );
};

export default ProductView;
