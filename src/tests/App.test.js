import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import App from "../App";

describe("Component App Render", () => {
    it("renders without crashing given the required props", () => {
        const wrapper = shallow(<App/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
