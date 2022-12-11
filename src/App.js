import { useEffect } from "react";
import { Provider } from "react-redux";
import Routers from "../src/router/Routers";
import MenuDesktop from "./components/MenuDesktop";
import ShoppingCart from "./components/ShoppingCart";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import store from "./store";

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Provider store={store}>
            <ShoppingCart />
            <Routers />
            <MenuDesktop />
          </Provider>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
