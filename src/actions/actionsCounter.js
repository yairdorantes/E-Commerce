import {
  DECREMENT,
  DECREMENT_5,
  INCREMENT,
  INCREMENT_5,
  RESET,
} from "../types";

export const adds = () => ({ type: INCREMENT });

export const decrement = () => ({ type: DECREMENT });

export const add5 = () => ({ type: INCREMENT_5, payload: 5 });

export const decrement5 = () => ({ type: DECREMENT_5, payload: 5 });

export const resets = () => ({ type: RESET });
