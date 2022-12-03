import { Provider } from "react-redux";
import Routers from "../src/router/Routers";
import MenuDesktop from "./components/MenuDesktop";
import ShoppingCart from "./components/ShoppingCart";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ShoppingCart />
        <Routers />
        <MenuDesktop />
      </Provider>
    </>
  );
}

export default App;
