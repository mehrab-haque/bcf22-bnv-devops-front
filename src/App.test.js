import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import App from "./App";
import Auth from "./components/admin/Auth";
import Main from "./components/admin/Main";
import Dashboard from "./components/admin/Dashboard";

describe("Component App Render", () => {
    it("renders without crashing given the required props", () => {
        const wrapper = shallow(<App/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

describe("Component Main Render", () => {
    it("renders without crashing given the required props", () => {
        const wrapper = shallow(<Main/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

describe("Component Auth Render", () => {
    it("renders without crashing given the required props", () => {
        const wrapper = shallow(<Auth/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

describe("Component Dashboard Render", () => {
    it("renders without crashing given the required props", () => {
        const wrapper = shallow(<Dashboard/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});