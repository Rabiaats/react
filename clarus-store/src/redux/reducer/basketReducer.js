import { ADD, REMOVE, CLEAR } from "../type/basketType";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  count: JSON.parse(localStorage.getItem("basket"))?.length || 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      localStorage.setItem("basket", JSON.stringify(payload));
      return {
        ...state,
        basket: payload,
        count: payload.length,
      };
    case REMOVE:
      localStorage.setItem(
        "basket",
        JSON.stringify(state.basket.filter((item) => item.id !== payload))
      );
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== payload),
        count: state.basket.filter((item) => item.id !== payload).length,
      };
    case CLEAR:
      localStorage.removeItem("basket");
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
