import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_EXISTING_CART,
  ADD_PRODUCT_ERROR,
  SET_VISIBILITY,
} from "../types/Index";
const INITIAL_STATE = {
  items: [],
  numberOfItems: 0,
  flash: {
    type: null,
    visibility: false,
    message: null,
  },
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
        numberOfItems: state.numberOfItems + 1,
      };
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        flash: {
          type: "Add Product error",
          visibility: true,
          message: action.payload,
        },
      };
    case SET_VISIBILITY:
      return {
        ...state,
        flash: { type: null, visibility: false, message: null },
      };
    case ADD_EXISTING_CART:
      return {
        ...state,
        items: [...action.payload],
        numberOfItems: action.payload.length,
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
