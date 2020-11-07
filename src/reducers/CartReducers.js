import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/Index";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((stateItem) => {
        return stateItem !== action.payload;
      });
    default:
      return [];
  }
};
