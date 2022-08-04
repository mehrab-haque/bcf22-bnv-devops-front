import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Main from "../components/admin/Main";

describe("Component Main Render", () => {
    it("renders without crashing given the required props", () => {
        const wrapper = shallow(<Main/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
