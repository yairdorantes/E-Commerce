import { Provider } from "react-redux";
import Routers from "../src/router/Routers";
import MenuDesktop from "./components/MenuDesktop";
import MenuMobile from "./components/MenuMobile";
import ShoppingCart from "./components/ShoppingCart";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import store from "./store";

function App() {
  return (
    <div className="bg-black">
      <AuthProvider>
        <CartProvider>
          <Provider store={store}>
            <ShoppingCart />
            <Routers />
            <MenuDesktop />
            {/* <MenuMobile /> */}
          </Provider>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
