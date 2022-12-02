import {
  ADD_MORE_TO_CART,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../types";

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
