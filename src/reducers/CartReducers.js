import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/Index";
const INITIAL_STATE = {
  items: [],
  numberOfItems: 0,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
        numberOfItems: state.numberOfItems + 1,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((stateItem) => {
          return stateItem !== action.payload;
        }),
        numberOfItems: state.numberOfItems - 1,
      };
    default:
      return state;
  }
};
