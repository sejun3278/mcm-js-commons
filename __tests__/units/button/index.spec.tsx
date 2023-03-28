import React from "react";

import { fireEvent, render } from "@testing-library/react";
import _Button from "../../../src/units/button";

export default describe("Button Units Page", () => {
  // 스냅샷
  test("Snapshot", () => {
    const component = render(
      <_Button
        onClickEvent={() => console.log("버튼 클릭")}
        className="jest-btn"
      >
        버튼 테스트
      </_Button>
    );
    expect(component.container).toMatchSnapshot();
  });

  // onClick 버튼 테스트
  test("Check onClick event", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <_Button onClickEvent={onClick} className="jest-btn">
        버튼 테스트
      </_Button>
    );
    fireEvent.click(getByText("버튼 테스트"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  // button 태그 유무 확인하기
  test("Check have button tag", () => {
    const { container } = render(
      <_Button
        onClickEvent={() => console.log("버튼 클릭")}
        className="jest-btn"
      >
        버튼 테스트
      </_Button>
    );
    const btnEle = container.querySelector(".jest-btn");

    // button 태그가 존재하는지 검증
    expect(btnEle).toBeInTheDocument();
    // 클래스 존재 여부 검증
    expect(btnEle).toHaveClass("jest-btn");
    // 버튼 텍스트 여부 검증
    expect(btnEle?.textContent).toEqual("버튼 테스트");
  });

  // disable 체크하기
  test("Check have button tag", () => {
    const { container } = render(
      <_Button
        onClickEvent={() => console.log("버튼 클릭")}
        className="jest-disable-btn"
        isDisable
      >
        현재는 사용할 수 없는 버튼입니다.
      </_Button>
    );
    const btnEle = container.querySelector(".jest-disable-btn");

    if (btnEle) {
      // button 태그가 존재하는지 검증
      expect(btnEle).toBeInTheDocument();
      // 버튼 텍스트 여부 검증
      expect(btnEle?.textContent).toEqual("현재는 사용할 수 없는 버튼입니다.");
      // cursor 스타일 검증
      expect(btnEle).toHaveStyle({ cursor: "not-allowed" });

      expect(container).toMatchSnapshot();
    }
  });
});
