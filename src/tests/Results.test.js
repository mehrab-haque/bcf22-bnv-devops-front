import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Auth from "../components/admin/Auth";
import Assignments from "../components/admin/Assignments";
import Results from "../components/admin/Results";

describe("Component Results Render", () => {
    it("renders without crashing given the required props", () => {
        const wrapper = shallow(<Results/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
