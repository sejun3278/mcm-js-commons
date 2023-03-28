import React from "react";

import { render } from "@testing-library/react";
import _SpanTextWithHtml from "../../../../../src/units/text/span/html";

export default describe("SpanText Units Page", () => {
  // 스냅샷
  test("Sanpshot", () => {
    const { container } = render(
      <_SpanTextWithHtml
        className="jest-span-test"
        styles={{ color: "red" }}
        dangerouslySetInnerHTML="<b>span tag + html 테스트</b>"
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("Check has span tag", () => {
    const { container, getByText } = render(
      <_SpanTextWithHtml
        className="jest-span-test"
        styles={{ color: "red" }}
        dangerouslySetInnerHTML="<b>span tag + html 테스트</b>"
      />
    );
    expect(container).toMatchSnapshot();

    const spanEle = container.querySelector(".jest-span-test");
    expect(spanEle).toBeInTheDocument(); // span 태그가 있는지 검증

    if (spanEle) {
      expect(getByText("span tag + html 테스트")).toBeTruthy();
      expect(spanEle).toHaveClass("jest-span-test mcm-span-unit"); // 클래스가 있는지 검증
      expect(spanEle).toHaveStyle("color : red"); // 스타일이 있는지 검증
    }
  });
});
