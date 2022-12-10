import { useEffect } from "react";
import { createContext, useState } from "react";
import { vars } from "../components/variables";
import { helpHttp } from "../helpers/helpHttp";
import jwt_decode from "jwt-decode";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const user = jwt_decode(localStorage.getItem("authTokenCommerce"));

  let urlGetCart = `${vars.mySite}/cart/${user.user.id}`;
  const [cartItems, setCartItems] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [total, setTotal] = useState(0);
  const getCart = () => {
    return helpHttp(urlGetCart)
      .get()
      .then((res) => {
        console.log(res);
        // setCartItems();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleQuantity = (item, quantity) => {
    if (quantity >= 1 && quantity <= item.stock) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: quantity }
            : cartItem
        )
      );
    }
  };
  const cleanCart = () => {
    setCartItems([]);
  };

  const addToCart = (item, quantity) => {
    let itemInCart = cartItems.find((itemCart) => itemCart.id === item.id);
    if (itemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: quantity }]);
    }
  };

  useEffect(() => {
    let cost = 0;
    cartItems.forEach((cartItem) => {
      cost += cartItem.quantity * cartItem.price;
    });
    setTotal(cost);
  }, [cartItems]);

  const handleVisibility = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  const contextData = {
    cartItems,
    total,
    isActive,
    addToCart,
    handleVisibility,
    handleQuantity,
    cleanCart,
  };

  useEffect(() => {
    // getCart()
    console.log(total);
  }, [total]);

  return (
    <CartContext.Provider value={contextData}>{children}</CartContext.Provider>
  );
};
export default CartContext;
