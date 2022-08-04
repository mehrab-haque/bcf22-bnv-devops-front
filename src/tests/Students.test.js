import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Auth from "../components/admin/Auth";
import Assignments from "../components/admin/Assignments";
import Students from "../components/admin/Students";

describe("Component Students Render", () => {
    it("renders without crashing given the required props", () => {
        const wrapper = shallow(<Students/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
