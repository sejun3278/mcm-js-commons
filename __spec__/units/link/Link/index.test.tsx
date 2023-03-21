import React from "react";

import { render } from "@testing-library/react";
import _Link from "../../../../src/units/link/Link";

export default describe("Link Tag Page", () => {
  // 스냅샷
  test("Snapshot", () => {
    const { container } = render(
      <_Link href="/modules/modal">모달로 이동하기</_Link>
    );
    expect(container).toMatchSnapshot();
  });

  // Link(a) 태그가 있는지 검증
  test("Check have a tag", () => {
    const { container } = render(
      <_Link href="/modules/modal" className="jest-link">
        모달로 이동하기
      </_Link>
    );

    expect(container).toMatchSnapshot();
    const aEle = container.querySelector(".jest-link");
    expect(aEle).toBeInTheDocument(); // a 태그 존재여부 검증
  });

  // href, className 속성이 존재하는지 검증
  test("Check have href in a tag", () => {
    const { container } = render(
      <_Link href="/modules/modal" className="jest-link">
        모달로 이동하기
      </_Link>
    );

    const aEle = container.querySelector(".jest-link");
    if (aEle) {
      expect(aEle).toHaveAttribute("href", "/modules/modal");
      expect(aEle).toHaveClass("mcm-link-unit jest-link");
    }
  });

  // <button>모달로 이동하기</button> 태그가 존재하는지 검증
  test("Check have button tag in a tag", () => {
    const { container, getByText } = render(
      <_Link href="/modules/modal">
        <button className="jest-btn">모달로 이동하기</button>
      </_Link>
    );

    // 버튼 태그 존재 여부 검증
    const btnEle = container.querySelector(".jest-btn");
    expect(btnEle).toBeInTheDocument();

    // 텍스트 검증하기
    expect(getByText("모달로 이동하기")).toBeTruthy();
  });
});
