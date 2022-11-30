import "./styles/product-view.scss";
import img1 from "../media/p1.jpg";
import img2 from "../media/p2.jpg";
import img3 from "../media/p3.jpg";
import { useEffect, useState } from "react";
import GenerateStars from "./GenerateStars";

const productGet = {
  id: 1,
  price: "$1.99",
  description:
    "Mountain bike Kugel Di-Max R29 21v frenos de disco mecánico cambios Shimano Tourney TZ color gris con pie de apoyo",
  main_image: img1,
  extra_images: [img2, img3],
  sales: 12,
  rating: 4.5,
  total_opinions: 10,
  stock: 12,
  product_details: `Hola a todos, hemos lanzado un nuevo estilo de bolígrafo de mampostería con colores más intensos. Creo que te gustará. A continuación se muestra el enlace, bienvenido a echar un vistazo:

https://articulo.mercadolibre.com.mx/MLM-1414925476-boligrafo-con-diseno-de-diamante-recuerdo-15-anos-12-uds-_JM


**12 Lapiceros Diamante Tornasol Pluma Recuerdo Regalo Xv Años

Descripción
BOLIGRAFO ELEGANTE CON FORMA DE DIAMANTE TORNASOL
DESCRIPCION:
Lápices con divertido adorno en forma de cristal para oficina, cubículo con estilo elegante.

Toque moderno Elegante

Cómodo y fácil de sostener

Tinta de color: Negro`,
};
const productOpinions = [
  {
    id: 1,
    product_id: 1,
    date: "23 abr 2022",
    text: "hola bueno muy bueno jsjsjsj",
    rating: 3,
  },
  {
    id: 2,
    product_id: 1,
    date: "30 may 2022",
    text: "excelente llego en buenas condiciones",
    rating: 5,
  },
  {
    id: 2,
    product_id: 1,
    date: "3 jul 2022",
    text: "mala calidad inga tu mae xdxd jajajajajajaja jajaajajxd jajajajajajaja jajaajajxd jajajajajajaja jajaajajxd jajajajajajaja jajaajaj",
    rating: 2,
  },
  {
    id: 2,
    product_id: 1,
    date: "3 jul 2022",
    text: "",
    rating: 2,
  },
];

const ProductView = () => {
  const [product] = useState(productGet);
  const [imgSrc, setImgSrc] = useState(product.main_image);
  const [stars] = useState(Math.floor(product.rating));
  const [stock, setStock] = useState(product.stock);
  const [opinions, setOpinions] = useState(productOpinions);
  const [quantityChoosen, setQuantityChoosen] = useState(1);
  const [imgSelected, setImgSelected] = useState(0);
  const setImage = (e) => {
    setImgSrc(e.target.src);
    setImgSelected(e.target.id);
  };

  const IncreaseQuantity = () => {
    quantityChoosen < stock && setQuantityChoosen(quantityChoosen + 1);
  };
  const reduceQuantity = () => {
    quantityChoosen > 1 && setQuantityChoosen(quantityChoosen - 1);
  };

  return (
    <>
      <div className="container-product-view">
        <div className="container-imgs">
          <div className="container-main-img">
            <img src={imgSrc} alt="" />
          </div>
          <div className="container-mini-images">
            <img
              id={0}
              src={product.main_image}
              style={{
                filter:
                  imgSelected == 0 ? "brightness(100%)" : "brightness(80%)",
                border:
                  imgSelected == 0
                    ? "3px solid #3483fa"
                    : "3px solid rgba(0, 0, 0, 0)",
              }}
              onClick={setImage}
              alt=""
            />
            {product.extra_images.map((image, id) => {
              return (
                <img
                  style={{
                    filter:
                      imgSelected == id + 1
                        ? "brightness(100%)"
                        : "brightness(80%)",
                    border:
                      imgSelected == id + 1
                        ? "3px solid #3483fa"
                        : "3px solid rgba(0, 0, 0, 0)",
                  }}
                  key={id}
                  id={id + 1}
                  onClick={setImage}
                  src={image}
                  alt=""
                />
              );
            })}
          </div>
        </div>
        <div className="container-product-info-view">
          <div className="how-many-sold">{product.sales} Vendidos</div>
          <div className="product-title">{product.description}</div>
          <div className="container-stars">
            <GenerateStars fullStars={stars}></GenerateStars>
            <span>{`(${product.total_opinions})`}</span>
          </div>
          <div className="price-product-view">
            <div className="under-price">{product.price}</div>
            <div className="choose-quantity">
              <button onClick={reduceQuantity} className="btn-quantity">
                -
              </button>
              <div className="quantity-choosen">
                <strong>{quantityChoosen}</strong>
              </div>
              <button onClick={IncreaseQuantity} className="btn-quantity">
                +
              </button>
            </div>
            <div className="stock-info">{`(${stock} disponibles)`}</div>
          </div>
          <div className="container-buttons-buy-add">
            <button className="btn-buy-now">Comprar Ahora</button>
            <button className="btn-add-cart">Agregar al carrito</button>
          </div>
        </div>
        <div className="container-features-details">
          <div>Descripcion</div>
          <p>{product.product_details}</p>
        </div>
        <div className="container-opinions">
          {opinions.map((opinion, key) => {
            return (
              <div key={key} className="opinion-box">
                <div>
                  <GenerateStars fullStars={opinion.rating}></GenerateStars>
                  <div>{opinion.date}</div>
                </div>
                <p>{opinion.text}</p>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductView;
