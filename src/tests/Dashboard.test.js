import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Dashboard from "../components/admin/Dashboard";


describe("Component Dashboard Render", () => {
    it("renders without crashing given the required props", () => {
        const wrapper = shallow(<Dashboard/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
