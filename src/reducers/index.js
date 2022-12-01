import { combineReducers } from "redux";
import contReducer from "./contReducer";
import cartReducer from "./shoppingReducer";

const reducer = combineReducers({
  counter: contReducer,
  shopping: cartReducer,
});

export default reducer;
