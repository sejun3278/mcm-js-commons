import React from "react";

import { render } from "@testing-library/react";
import _Image from "../../../src/units/image";

export default describe("Image Units Page", () => {
  // Image 태그 Snapshot
  test("Sanpshot", () => {
    const { container } = render(
      <_Image
        src="/images/commons/logo/MCM_white.logo.png"
        className="jest-image"
      />
    );
    // @ts-ignore
    expect(container).toMatchSnapshot();
  });

  // img 태그가 존재하고 src가 제대로 적용됐는지 검증
  test("Image Units Page - Check have img tag", () => {
    const { container } = render(
      <_Image
        src="/images/commons/logo/MCM_white.logo.png"
        className="jest-image"
        styles={{ width: "100px" }}
      />
    );
    const imgEle = container.querySelector(".jest-image") as HTMLImageElement;

    expect(imgEle).toBeInTheDocument(); // img 태그 존재여부 검증
    if (imgEle) {
      // img 태그에 src 속성 값이 제대로 들어갔는지 검증
      expect(imgEle.src).toContain("/images/commons/logo/MCM_white.logo.png");
      // img 태그에 스타일 적용됐는지 검증
      expect(imgEle).toHaveStyle("width: 100px");
      // class가 일치하는지 검증
      expect(imgEle).toHaveClass("jest-image");
    }
  });
});
