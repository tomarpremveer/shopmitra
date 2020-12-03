import { ADD_PRODUCTS, VIEW_PRODUCT } from "../types/Index";
const INITIAL_STATE = {
  products: [],
  vProduct: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return { ...state, products: [...state.products, ...action.payload] };
    case VIEW_PRODUCT:
      return { ...state, vProduct: action.payload };
    default:
      return state;
  }
};
