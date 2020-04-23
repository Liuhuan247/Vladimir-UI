import React from "react";
import { render } from "@testing-library/react";
import Button from "./button";

describe("test button component", () => {
    it("should render the correct button by default props", () => {
        const wrapper = render(<Button>大兄弟</Button>);
        const element = wrapper.getByText("大兄弟");
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual("BUTTON");
        expect(element).toHaveClass("btn btn-default");
    });

    it("should render the correct button based on different props", () => {});
    it("should render a link when btnType equal link and href is provided", () => {});

    it("should render disabled button when disabled set be true", () => {});
});
