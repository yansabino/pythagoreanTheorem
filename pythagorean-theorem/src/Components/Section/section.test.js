import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Section from "./index";
import shadows from "@material-ui/core/styles/shadows";
import { FormContainer } from "../../style/Section";
Enzyme.configure({ adapter: new Adapter() });

describe("Section", () => {
  const handleInputChange = jest.fn();
  const calculate = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Section handleInputChange={handleInputChange} calculate={calculate} />
    );
  });

  it("renders", () => {
    expect(wrapper).not.toBeNull();
  });

  it("checks if theres two inputs", () => {
    expect(wrapper.find("input")).toHaveLength(2);
  });
});
