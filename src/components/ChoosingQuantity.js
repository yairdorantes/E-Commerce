import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, delFromCart } from "../actions/shoppingActions";
import "./styles/choose-quant.scss";
const ChoosingQuantity = ({ stock, product }) => {
  const dispatch = useDispatch();

  const [quantityChoosen, setQuantityChoosen] = useState(product.quantity);

  const IncreaseQuantity = () => {
    if (quantityChoosen < stock) {
      setQuantityChoosen(quantityChoosen + 1);
      product && dispatch(addToCart(product));
    }
  };
  const reduceQuantity = (e) => {
    if (quantityChoosen > 1) {
      setQuantityChoosen(quantityChoosen - 1);
      product && dispatch(delFromCart(product.id));
    }
  };

  return (
    <>
      <div className="choose-quantity">
        <div className="btns-quantity">
          <button onClick={reduceQuantity} className="btn-quantity">
            -
          </button>
          <div className="quantity-choosen">
            <strong>{quantityChoosen}</strong>
          </div>
          <button
            // style={{ filter: "brightness(63%)" }}
            onClick={IncreaseQuantity}
            className="btn-quantity"
          >
            +
          </button>
        </div>
        <div className="stock-info">{`(${stock} disponibles)`}</div>
      </div>
    </>
  );
};

export default ChoosingQuantity;
