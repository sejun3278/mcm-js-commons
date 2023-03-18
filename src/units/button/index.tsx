import React from "react";

import CommonsHooksComponents from "../../hooks";

interface StyleTypes {
  children: React.ReactNode;
  className?: string; // 클래스 이름
  onClickEvent: () => void; // 실행할 클릭 이벤트
}

// button 태그로 렌더하는 컴포넌트
export default function _Button({
  children,
  className,
  onClickEvent,
}: StyleTypes) {
  const { getAllComponentsClassName } = CommonsHooksComponents();

  return (
    <button
      className={getAllComponentsClassName("cmm-button-unit", className)}
      onClick={onClickEvent}
      role="button_click_event"
    >
      {children}
    </button>
  );
}
