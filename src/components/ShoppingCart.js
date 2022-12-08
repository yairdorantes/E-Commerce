import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  delFromCart,
  getTotal,
  handleVisibility,
  numItems,
} from "../actions/shoppingActions";
import ChoosingQuantity from "./ChoosingQuantity";
import "./styles/cart.scss";
import OutsideClickHandler from "react-outside-click-handler";
import Modal from "react-modal";
const customStyles = {
  content: {
    // color: "white",
    transition: "1s ease-out",
    width: "350px",
    height: "350px",
    backgroundColor: "#00000000",
    outline: "none",
  },
  overlay: { zIndex: 1999, backgroundColor: "#18191ab1" },
};
const ShoppingCart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { cart, total, visible } = state.shopping;

  useEffect(() => {
    dispatch(getTotal());
  }, []);

  return (
    <>
      <Modal
        className="modal"
        ariaHideApp={false}
        style={customStyles}
        isOpen={visible}
      ></Modal>
      <OutsideClickHandler
        onOutsideClick={() => {
          visible && dispatch(handleVisibility());
        }}
      >
        <div
          className="container-cart"
          style={{ right: visible ? "0px" : "-600px" }}
        >
          <div className="container-cart-products">
            {cart.length > 0 ? (
              cart.map((product, key) => {
                return (
                  <div key={key}>
                    <div className="container-cart-product">
                      <div className="container-img-data-product">
                        <div>
                          <Link to={`/${product.section}/${product.id}`}>
                            <img src={product.main_image} alt="" />
                          </Link>
                          <div
                            onClick={() =>
                              dispatch(delFromCart(product.id, true))
                            }
                            className="del-all-product"
                          >
                            Eliminar
                          </div>
                        </div>
                        <div className="container-info-aside-image">
                          <Link
                            style={{ color: "white", textDecoration: "none" }}
                            to={`/${product.section}/${product.id}`}
                          >
                            <div className="name-product-in-cart">
                              {product.description}
                            </div>
                          </Link>
                          <div className="container-extra-info">
                            <ChoosingQuantity
                              stock={product.stock}
                              product={product}
                            />
                            <div className="total-of-product-cart">
                              ${product.price * product.quantity}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="separate-product-cart" />
                  </div>
                );
              })
            ) : (
              <div>Tu carrito está vacío</div>
            )}
          </div>

          <div className="total-cart">
            <hr />
            <div className="total-text">
              <div>Total</div> <div>${total}</div>
            </div>
            <button className="css-button-3d--sky">Continuar compra</button>
          </div>
        </div>
      </OutsideClickHandler>
    </>
  );
};

export default ShoppingCart;
