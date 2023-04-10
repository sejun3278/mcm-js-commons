import React from "react";

import { render } from "@testing-library/react";
import _Anchor from "../../../../src/units/link/anchor";

export default describe("Anchor Tag Page", () => {
  // 스냅샷
  test("Snapshot", () => {
    const { container } = render(
      <_Anchor href="https://www.naver.com"> 네이버로 이동 </_Anchor>
    );
    expect(container).toMatchSnapshot();
  });

  // a 태그가 존재하는지 체크
  test("Check have a tag", () => {
    const { container } = render(
      <_Anchor href="https://www.daum.net"> 다음으로 이동 </_Anchor>
    );
    const aEle = container.querySelector("a");
    expect(aEle).toBeInTheDocument();
  });

  // a 태그에 href, target, className 속성이 있는지 체크
  test("Check have href in a tag", () => {
    const { container } = render(
      <_Anchor href="https://www.daum.net" className="jest-anchor">
        다음으로 이동
      </_Anchor>
    );
    const aEle = container.querySelector(".jest-anchor");

    if (aEle) {
      expect(aEle).toHaveAttribute("href", "https://www.daum.net");
      expect(aEle).toHaveAttribute("target", "_blank"); // target 속성 검증
      expect(aEle).toHaveClass("mcm-anchor-unit jest-anchor"); // 클래스 검증
    }
  });

  // a 태그에 target 속성으로 _self를 사용중인지 체크
  test("Check have href in a tag", () => {
    const { container } = render(
      <_Anchor href="https://www.daum.net" notTarget className="jest-anchor">
        다음으로 이동
      </_Anchor>
    );
    const aEle = container.querySelector(".jest-anchor");

    expect(aEle).toBeInTheDocument();
    expect(aEle).toHaveAttribute("target", "_self");
  });

  // children 데이터로 <button>이동하기</button>가 있는지를 검증
  test("Check have href in a tag", () => {
    const { container, getByText } = render(
      <_Anchor href="https://www.daum.net" className="jest-anchor">
        <button className="jest-anchor-button">이동하기</button>
      </_Anchor>
    );
    const aEle = container.querySelector(".jest-anchor");
    expect(aEle).toHaveAttribute("href", "https://www.daum.net");

    const btnEle = container.querySelector(".jest-anchor-button");
    expect(btnEle).toBeInTheDocument(); // 버튼 태그가 먼저 존재하는지 체크

    if (btnEle) {
      expect(getByText("이동하기")).toBeTruthy(); // 이동하기 텍스트가 있는지 검증
    }
  });
});
