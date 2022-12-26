import "./styles/product-view.scss";
import { useEffect, useState, useContext } from "react";
import GenerateStars from "./GenerateStars";
import CartContext from "../context/CartContext";
import { helpHttp } from "../helpers/helpHttp";
import { useParams } from "react-router-dom";
import { vars } from "./variables";
import Reviews from "./Reviews";
import ChoosingQuantity from "./ChoosingQuantity";

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
      <section className="body-font overflow-hidden  bg-dark text-white h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={imgSrc || product.main_image}
            />

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2> */}
              <h1 className="text-white text-3xl title-font font-medium mb-1">
                {product.description}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {product.rate_count > 0 && (
                    <GenerateStars
                      fullStars={Math.floor(product.rate / product.rate_count)}
                    />
                  )}
                  <span className="text-sky-100 ml-3">
                    {`${product.rate_count}`} Reviews
                  </span>
                </span>
                {/* <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span> */}
              </div>
              <p className="leading-relaxed">{product.details}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-3xl text-white">
                  ${product.price}
                </span>
                <button
                  onClick={() => {
                    sendItem(product);
                  }}
                  className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {product && <Reviews product={productId} state={product} />} */}
    </>
  );
};

export default ProductView;
