import React from "react";

import { render } from "@testing-library/react";
import _Title from "../../../src/units/title";

export default describe("Title Page", () => {
  // 스냅샷
  test("Snapshot", () => {
    const { container } = render(<_Title>title을 렌더합니다.</_Title>);
    expect(container).toMatchSnapshot();
  });

  // h1 태그와 텍스트가 존재하는지 검증
  test("Check have h1 tag", () => {
    const { container } = render(
      <_Title className="jest-h1" styles={{ color: "red" }}>
        h1 태그입니다.
      </_Title>
    );

    const headerEle = container.querySelector(".jest-h1");
    if (headerEle) {
      // h1 존재여부 검증
      expect(headerEle).toBeInTheDocument();
      // 클래스 검증
      expect(headerEle).toHaveClass("jest-h1 mcm-title-unit");
      // 텍스트 검증
      expect(headerEle.textContent).toEqual("h1 태그입니다.");
      // 스타일 검증
      expect(headerEle).toHaveStyle({ color: "red" });
    }
  });

  // h2 태그가 존재하는지 검증
  test("Check have h2 tag", () => {
    const { container } = render(
      <_Title className="jest-h2" titleLevel="h2">
        h2 태그입니다.
      </_Title>
    );
    expect(container).toMatchSnapshot();

    const headerEle = container.querySelector(".jest-h2");
    if (headerEle) {
      // h1 존재여부 검증
      expect(headerEle).toBeInTheDocument();
      // 클래스 검증
      expect(headerEle).toHaveClass("jest-h2 mcm-title-unit");
      // 텍스트 검증
      expect(headerEle.textContent).toEqual("h2 태그입니다.");
    }
  });

  // 잘못된 props가 전달될 경우 h1태그 렌더
  test("Check have h2 tag", () => {
    const { container } = render(
      // @ts-ignore
      <_Title className="jest-img" titleLevel="img">
        img 태그를 전달했지만 h1 태그가 렌더됩니다.
      </_Title>
    );
    expect(container).toMatchSnapshot();

    const headerEle = container.querySelector(".jest-img");
    if (headerEle) {
      // h1 존재여부 검증
      expect(headerEle).toBeInTheDocument();
      // 클래스 검증
      expect(headerEle).toHaveClass("jest-img mcm-title-unit");
      // 텍스트 검증
      expect(headerEle.textContent).toEqual(
        "img 태그를 전달했지만 h1 태그가 렌더됩니다."
      );
    }
  });
});
