import { ADD_PRODUCTS } from "../types/Index";
// const INITIAL_STATE = {
//   products: [],
// };
export default (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
