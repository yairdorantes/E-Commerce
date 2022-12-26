import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import ChoosingQuantity from "./ChoosingQuantity";
import "./styles/cart.scss";
import OutsideClickHandler from "react-outside-click-handler";
import Modal from "react-modal";
import CartContext from "../context/CartContext";
import cruz from "../media/cruz.png";
import arrowLeft from "../media/leftArrow.png";
const customStyles = {
  content: {
    transition: "1s ease-out",
    width: "350px",
    height: "350px",
    backgroundColor: "#00000000",
    outline: "none",
  },
  overlay: { zIndex: 1999, backgroundColor: "#000000a0" },
};
const ShoppingCart = () => {
  let {
    cartItems,
    isActive,
    handleVisibility,
    cleanCart,
    total,
    deleteItem,
    isLoading,
  } = useContext(CartContext);
  useEffect(() => {
    isActive
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isActive]);
  return (
    <>
      <Modal
        className="modal-cart"
        ariaHideApp={false}
        style={customStyles}
        isOpen={isActive}
        closeTimeoutMS={400}
      >
        <OutsideClickHandler onOutsideClick={handleVisibility}>
          <div
            className={
              isActive ? "container-cart cart-show" : "container-cart cart-hide"
            }
          >
            <div
              style={{
                backgroundColor: "red",
              }}
            >
              <button className="arrow-left" onClick={handleVisibility}>
                <img src={arrowLeft} alt="" />
              </button>
              <div className="title-cart">
                <strong>Carrito de Compras</strong>
              </div>
            </div>
            <div className="container-items-cart">
              {cartItems.length > 0 ? (
                cartItems.map((item, key) => {
                  return (
                    <div key={key} className="container-cart-item">
                      <div className="container-img-text-item">
                        <div
                          className="container-img"
                          style={{
                            backgroundImage: "url(" + item.main_image + ")",
                          }}
                        ></div>
                        <div className="container-price-descrip">
                          <p>{item.description}</p>
                          <div className="price-item">
                            ${item.quantity * item.price}
                          </div>
                        </div>
                        <div
                          onClick={() => deleteItem(item.id)}
                          className="cross-out"
                        >
                          <img src={cruz} alt="" />
                        </div>
                        <div className="container-quantity">
                          <ChoosingQuantity product={item} />
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>No items</div>
              )}
            </div>
            <div className="container-total">
              <hr />
              <div className="container-texts">
                <div className="subtotal-text">
                  <strong>Subtotal:</strong>
                </div>
                <div className="total-cart">
                  <strong>${total}</strong>
                </div>
              </div>
              <div className="checkout-cart btn btn-active btn-accent w-1/2 mx-auto">
                CONTINUAR COMPRA
              </div>
            </div>
            {/* {isLoading ? <div>cargndo</div> : <div>no cargado</div>} */}
          </div>
        </OutsideClickHandler>
      </Modal>
    </>
  );
};

export default ShoppingCart;
