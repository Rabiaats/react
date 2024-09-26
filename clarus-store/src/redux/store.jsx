import { combineReducers, legacy_createStore as createStore } from "redux";
import reducer from "./reducer/basketReducer";
import { saveLocalStorage } from "./action/basketAction";

const rootReducer = combineReducers({
  basket: reducer,
});

export const store = createStore(rootReducer);

// store.subscribe(() => {
//   saveLocalStorage(store.getState().basket);
// });
