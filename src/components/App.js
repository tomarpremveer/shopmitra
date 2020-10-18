import React from "react";
import Header from "./Header";
import Cart from "./Cart";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(combineReducers({ a: () => "hi" }))}>
        <BrowserRouter>
          <div className="ui">
            <Header />
          </div>
          <Route path="/cart" exact component={Cart}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
