import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";

import Booking from "./Booking";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Booking />
        </HashRouter>
      </div>
    );
  }
}

export default App;
