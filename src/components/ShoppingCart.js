import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import ChoosingQuantity from "./ChoosingQuantity";
import "./styles/cart.scss";
import OutsideClickHandler from "react-outside-click-handler";
import Modal from "react-modal";
import CartContext from "../context/CartContext";
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
  let { cartItems, isActive, handleVisibility, cleanCart, total } =
    useContext(CartContext);

  useEffect(() => {
    console.log(total);
  }, [total]);

  return (
    <>
      <Modal
        className="modal"
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
            <button onClick={handleVisibility}>jajaajaj</button>
            {cartItems ? (
              cartItems.map((item, key) => {
                // console.log("si hay");
                return (
                  <div key={key}>
                    <div>{item.description}</div>
                    <ChoosingQuantity product={item} />
                  </div>
                );
              })
            ) : (
              <div>No items</div>
            )}
            <button onClick={cleanCart}>clean</button>
            <div>total:{total}</div>
            <button onClick={() => console.log(cartItems)}>get</button>
          </div>
          {/* <div className="cart">{cartItems}</div> */}
        </OutsideClickHandler>
      </Modal>
    </>
  );
};

export default ShoppingCart;
