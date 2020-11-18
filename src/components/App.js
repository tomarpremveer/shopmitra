import React from "react";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import Header from "./Header";
import Cart from "./Cart";
import Products from "./Products";
import cartReducers from "../reducers/CartReducers";
import userReducers from "../reducers/UserReducers";
import ProductReducers from "../reducers/ProductReducers";
const store = createStore(
  combineReducers({
    cart: cartReducers,
    user: userReducers,
    products: ProductReducers,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="ui">
          <Header />
        </div>
        <Route path="/" exact component={Products} />

        <Route path="/cart" exact component={Cart}></Route>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
