import React from "react";

import { render } from "@testing-library/react";
import _PTextWithHtml from "../../../../../src/units/text/p/html";

export default describe("PText tag Units Page", () => {
  // P 태그 스냅샷
  test("Sanpshot", () => {
    const { container } = render(
      <_PTextWithHtml
        className="jest-p-test"
        styles={{ color: "red" }}
        dangerouslySetInnerHTML="<b>p tag + html 테스트</b>"
      />
    );
    // @ts-ignore
    expect(container).toMatchSnapshot();
  });

  // P 태그 존재여부 검증
  test("Check has P Tag", () => {
    const { container, getByText } = render(
      <_PTextWithHtml
        className="jest-p-test"
        styles={{ color: "red" }}
        dangerouslySetInnerHTML="<b>p tag + html 테스트</b>"
      />
    );
    const pEle = container.querySelector(".jest-p-test");
    expect(pEle).toBeInTheDocument(); // P 태그가 있는지 검증

    if (pEle) {
      const checkText = getByText("p tag + html 테스트");
      expect(checkText).toBeInTheDocument(); // 텍스트가 존재하는지 검증

      expect(pEle).toHaveClass("jest-p-test mcm-p-unit"); // 클래스가 있는지 검증
      expect(pEle).toHaveStyle("color: red"); // 스타일 일치하는지 검증
    }
  });
});
