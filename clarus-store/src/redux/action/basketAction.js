import { ADD, REMOVE, CLEAR } from "../type/basketType";

export const add = (payload) => {
  return {
    type: ADD,
    payload: payload,
  };
};

export const remove = (payload) => {
  return {
    type: REMOVE,
    payload: payload,
  };
};

export const clear = () => {
  return {
    type: CLEAR,
  };
};

export const saveLocalStorage = (payload) => {
  localStorage.setItem("basket", JSON.stringify(payload));
};
