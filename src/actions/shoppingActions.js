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

export const getTotal = () => ({ type: GET_TOTAL });
export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });
export const addMoreToCart = (product) => ({
  type: ADD_MORE_TO_CART,
  payload: product,
});
export const delFromCart = (id, all = false) =>
  all
    ? { type: REMOVE_ALL_FROM_CART, payload: id }
    : { type: REMOVE_ONE_FROM_CART, payload: id };

export const clearCart = () => ({ type: CLEAR_CART });

export const numItems = () => ({ type: GET_NUM_ITEMS });
export const handleVisibility = () => ({ type: HANDLE_VISIBILITY });
