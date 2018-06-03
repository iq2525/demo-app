// @flow

import React, { Component } from "react";
import "./App.css";
import { Navbar, Grid, Jumbotron, Button } from "react-bootstrap";

class App extends Component {
  render() {
    const numberTest: number = 123;

    return (
      <section>
        <div className="unicorn-details">
          <div>Number test {numberTest}</div>
          <div>
            <img
              alt="unicorn svg test"
              src={process.env.PUBLIC_URL + "/unicorn.svg"}
            />
          </div>
        </div>

        <div>
          <Navbar inverse fixedTop>
            <Grid>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/">React App</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
            </Grid>
          </Navbar>
          <Jumbotron>
            <Grid>
              <h1>Welcome to React</h1>
              <p>
                <Button
                  bsStyle="success"
                  bsSize="large"
                  href="http://react-bootstrap.github.io/components.html"
                  target="_blank"
                >
                  View React Bootstrap Docs
                </Button>
              </p>
            </Grid>
          </Jumbotron>
        </div>
      </section>
    );
  }
}

export default App;
