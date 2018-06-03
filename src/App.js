import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";

class App extends Component {
  render() {
    return (
      <section>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div>
            <img
              alt="unicorn svg test"
              src={process.env.PUBLIC_URL + "/unicorn.svg"}
            />
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <Button />
      </section>
    );
  }
}

export default App;
