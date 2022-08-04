import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Auth from "../components/admin/Auth";

describe("Component Auth Render", () => {
    it("renders without crashing given the required props", () => {
        const wrapper = shallow(<Auth/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
