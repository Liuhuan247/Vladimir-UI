import React from "react";
import { render } from "@testing-library/react";
import Button from "./button";

test("my first react test", () => {
    const wrapper = render(<Button>大兄弟</Button>);
    const element = wrapper.queryByText("大兄弟");
    expect(element).toBeTruthy();
});
