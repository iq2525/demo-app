import React from "react";
import { shallow } from "enzyme";
import App from "./App";

it("renders welcome message", () => {
  debugger;
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper).toContainReact(welcome);
});
