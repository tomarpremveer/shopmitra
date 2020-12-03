import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cartReducers from "../reducers/CartReducers";
import userReducers from "../reducers/UserReducers";
import ProductReducers from "../reducers/ProductReducers";
export default createStore(
  combineReducers({
    cart: cartReducers,
    user: userReducers,
    products: ProductReducers,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
