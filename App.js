import React, { Component } from "react";
import Drawer from "./navigation/Drawer";

import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducers/index";

let store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Drawer />
      </Provider>
    );
  }
}

export default App;
