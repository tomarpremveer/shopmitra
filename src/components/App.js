import React from "react";
import Header from "./Header";
import Cart from "./Cart";
import Products from "./Products";
import cartReducers from "../reducers/CartReducers";
import userReducers from "../reducers/UserReducers";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
//import { thunk, applyMiddleware } from "redux-thunk";
import { BrowserRouter, Route } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
  combineReducers({ cart: cartReducers, user: userReducers }),
  composeWithDevTools()
);
class App extends React.Component {
  render() {
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
  }
}

export default App;
