import { useDispatch, useSelector } from "react-redux";
import { delFromCart } from "../actions/shoppingActions";
import ChoosingQuantity from "./ChoosingQuantity";
import "./styles/cart.scss";

const ShoppingCart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { cart } = state.shopping;

  return (
    <div className="container-cart">
      <div>
        <div>Carrito de Compras</div>
        <div>{cart.length} Productos</div>
      </div>
      <div className="container-cart-products">
        {cart.length > 0 ? (
          cart.map((product, key) => {
            return (
              <div key={key} className="container-cart-product">
                <div className="container-img-data-product">
                  <img src={product.main_image} alt="" />
                  <div>{product.description}</div>
                  <div
                    onClick={() => dispatch(delFromCart(product.id, true))}
                    className="del-all-product"
                  >
                    Eliminar
                  </div>
                </div>
                <div className="container-extra-info">
                  <ChoosingQuantity stock={product.stock} product={product} />
                  <div> ${product.price}</div>
                  {console.log(product.quantity)}
                  <div>${product.price * product.quantity}</div>
                </div>
              </div>
            );
          })
        ) : (
          <div>Tu carrito está vacío</div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
