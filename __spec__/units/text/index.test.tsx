import React from "react";

import { render } from "@testing-library/react";
import _Text from "../../../src/units/text";

export default describe("Text Page", () => {
  // 스냅샷
  test("Snapshot - span", () => {
    const { container } = render(<_Text>span 태그를 렌더합니다.</_Text>);
    expect(container).toMatchSnapshot();
  });

  // p태그 렌더 스냅샷
  test("Snapshot - p", () => {
    const { container } = render(<_Text type="p">p 태그를 렌더합니다.</_Text>);
    expect(container).toMatchSnapshot();
  });

  // span 태그 존재여부와 클래스, 텍스트 값 확인하기
  test("Check Text and class", () => {
    const { container } = render(
      <_Text type="span" className="jest-span">
        span 태그를 렌더합니다.
      </_Text>
    );

    const spanEle = container.querySelector(".jest-span");
    if (spanEle) {
      // span 태그가 존재하는지 검증
      expect(spanEle).toBeInTheDocument();
      // 클래스 여부 검증
      expect(spanEle).toHaveClass("jest-span mcm-span-unit");
      // 텍스트 여부 검증
      expect(spanEle.textContent).toEqual("span 태그를 렌더합니다.");
    }
  });
});
