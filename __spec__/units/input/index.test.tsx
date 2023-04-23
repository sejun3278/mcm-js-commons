import React from "react";

import { render } from "@testing-library/react";
import { _Input } from "../../../src";

export default describe("Input Units Page", () => {
  // Input 태그 Snapshot
  test("Sanpshot", () => {
    const { container } = render(
      <_Input className="jest-input" onChangeEvent={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });
});
