import {
  ADD_MORE_TO_CART,
  ADD_TO_CART,
  CLEAR_CART,
  GET_NUM_ITEMS,
  GET_TOTAL,
  HANDLE_VISIBILITY,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../types";

export const initialState = {
  message: "Full cart",
  total: 0,
  items: 0,
  visible: false,
  cart: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let newItem = action.payload;

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case ADD_MORE_TO_CART: {
      let newItem = action.payload;

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      if (itemInCart) {
        if (itemInCart.quantity + newItem.quantity > itemInCart.stock) {
          alert("exceso de productos no seas atascado");
          return { ...state, cart: [...state.cart] };
        }
      }

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + newItem.quantity }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: newItem.quantity }],
          };
    }
    case REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case REMOVE_ALL_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      state.total -= itemToDelete.quantity * itemToDelete.price;
      state.items -= itemToDelete.quantity;
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case CLEAR_CART:
      return initialState;
    case GET_TOTAL:
      let amount = 0;
      state.cart.map((item) => {
        amount += item.quantity * item.price;
      });
      state.total = amount;
      return { ...state };
    case GET_NUM_ITEMS:
      let itemsFound = 0;
      state.cart.map((item) => {
        itemsFound += item.quantity;
      });
      state.items = itemsFound;
      return { ...state, cart: [...state.cart] };

    case HANDLE_VISIBILITY:
      state.visible ? (state.visible = false) : (state.visible = true);
      return { ...state, cart: [...state.cart] };

    default:
      return state;
  }
}
