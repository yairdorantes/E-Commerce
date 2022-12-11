import { useContext, useState, useEffect } from "react";
import CartContext from "../context/CartContext";

import "./styles/choose-quant.scss";
const ChoosingQuantity = ({ product }) => {
  let { handleQuantity } = useContext(CartContext);
  const [quantityChoosen, setQuantityChoosen] = useState(product.quantity);

  const IncreaseQuantity = () => {
    if (quantityChoosen < product.stock) {
      setQuantityChoosen(quantityChoosen + 1);
    }
  };
  const reduceQuantity = () => {
    if (quantityChoosen > 1) {
      setQuantityChoosen(quantityChoosen - 1);
    }
  };
  const handleChangeInput = (e) => {
    setQuantityChoosen(parseInt(e.target.value));
  };
  useEffect(() => {
    if (quantityChoosen <= product.stock && quantityChoosen > 0) {
      handleQuantity(product, quantityChoosen);
    }
  }, [quantityChoosen]);

  return (
    <>
      <div className="choose-quantity">
        <div className="btns-quantity">
          <button onClick={reduceQuantity} className="btn-quantity">
            -
          </button>
          <input
            style={{
              color:
                quantityChoosen > product.stock || quantityChoosen === 0
                  ? "red"
                  : "white",
            }}
            type="number"
            step="1"
            min="1"
            className="input-items-cart"
            value={quantityChoosen}
            // onkeypress="return event.charCode >= 48 && event.charCode <= 57"
            onChange={handleChangeInput}
          />
          <button
            // style={{ filter: "brightness(63%)" }}
            onClick={IncreaseQuantity}
            className="btn-quantity"
          >
            +
          </button>
        </div>

        <div className="stock-info">{`(${product.stock} disponibles)`}</div>
      </div>
    </>
  );
};

export default ChoosingQuantity;
