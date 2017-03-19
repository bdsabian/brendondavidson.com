import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

import Timer from "../Timer";

jest.useFakeTimers();

describe("Timer", () => {
  it("calls the callback after the delay passed via props", () => {
    const delay = 3000;
    const callback = jest.fn();
    const component = mount(<Timer delay={delay} callback={callback} />);

    const setIntervalCalls = setInterval.mock.calls;
    expect(setIntervalCalls[setIntervalCalls.length - 1][1]).toBe(delay);
    expect(callback.mock.calls.length);
  });
});
