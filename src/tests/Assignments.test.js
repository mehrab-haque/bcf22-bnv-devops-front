import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Auth from "../components/admin/Auth";
import Assignments from "../components/admin/Assignments";

describe("Component Assignments Render", () => {
    it("renders without crashing given the required props", () => {
        const wrapper = shallow(<Assignments/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
