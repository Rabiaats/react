import { ADD, REMOVE, CLEAR } from "../type/basketType";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")).basket || [],
  count: JSON.parse(localStorage.getItem("basket")).basket.length || 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        ...state,
        basket: payload,
        count: payload.length,
      };
    case REMOVE:
      return {
        ...state,
        basket: [...state.basket.filter((item) => item.id !== payload)],
        count: [...state.basket.filter((item) => item.id !== payload)].length,
      };
    case CLEAR:
      return {
        ...state,
        basket: [],
        count: 0,
      };
    default:
      return state;
  }
};

export default reducer;
