import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Cart from "./Cart";
import Products from "./Products";
import Order from "./Order";
import ProductDetail from "./ProductDetail";
import store from "../reducers/CreateStore";
import Flash from "./Flash";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="ui">
          <Header />
          <Flash />
        </div>
        <Route path="/" exact component={Products} />
        <Route path="/product/:id" exact component={ProductDetail} />
        <Route path="/cart" exact component={Cart}></Route>
        <Route path="/order" exact component={Order}></Route>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
