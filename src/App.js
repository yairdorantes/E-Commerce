import { Provider } from "react-redux";
import Routers from "../src/router/Routers";
import MenuDesktop from "./components/MenuDesktop";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <MenuDesktop></MenuDesktop>
        <Routers></Routers>
      </Provider>
    </>
  );
}

export default App;
