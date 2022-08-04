import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Auth from "../components/admin/Auth";
import Assignments from "../components/admin/Assignments";
import Courses from "../components/admin/Courses";

describe("Component Courses Render", () => {
    it("renders without crashing given the required props", () => {
        const wrapper = shallow(<Courses/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
