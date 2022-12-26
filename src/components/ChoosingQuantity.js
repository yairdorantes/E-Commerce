import { useContext, useState, useEffect } from "react";
import CartContext from "../context/CartContext";

import "./styles/choose-quant.scss";
const ChoosingQuantity = ({ product }) => {
  let { handleQuantity } = useContext(CartContext);
  const [quantityChoosen, setQuantityChoosen] = useState(
    product.quantity ? product.quantity : 1
  );

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
      <div className="custom-number-input h-10 w-28 m-2">
        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button
            onClick={reduceQuantity}
            className=" bg-blue-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          >
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            style={{
              color:
                quantityChoosen > product.stock || quantityChoosen === 0
                  ? "red"
                  : "white",
            }}
            type="number"
            className="focus:outline-none text-center w-full bg-blue-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
            name="custom-input-number"
            // value="0"
            step="1"
            min="1"
            max={product.stock}
            value={quantityChoosen}
            onChange={handleChangeInput}
          ></input>
          <button
            onClick={IncreaseQuantity}
            className="bg-blue-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ChoosingQuantity;
{
  /* <div className="choose-quantity">
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
</div> */
}
