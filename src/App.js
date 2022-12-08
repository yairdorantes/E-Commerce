import { Provider } from "react-redux";
import Routers from "../src/router/Routers";
import MenuDesktop from "./components/MenuDesktop";
import ShoppingCart from "./components/ShoppingCart";
import { AuthProvider } from "./context/AuthContext";
import store from "./store";

function App() {
  return (
    <>
      <AuthProvider>
        <Provider store={store}>
          <ShoppingCart />
          <Routers />
          <MenuDesktop />
        </Provider>
      </AuthProvider>
    </>
  );
}

export default App;
