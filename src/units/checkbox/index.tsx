import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import _Error from "../error";
import { getAllComponentsClassName } from "../../hooks";

export default function _Checkbox(props: {
  inputId: string; // input 태그에 삽입될 id값
  onChangeEvent: () => void; // 체크 클릭시 실행될 이벤트
  labelId?: string; // label 태그에 삽입될 id값
  isChecked?: boolean; // 체크 여부
  classNames?: {
    // 각각의 className 정보
    input?: string;
    label?: string;
  };
  mainColor?: string; // 체크시 사용될 색상
  readOnly?: boolean; // 작동 중지 여부
}) {
  const {
    inputId,
    labelId,
    onChangeEvent,
    isChecked,
    classNames,
    mainColor,
    readOnly,
  } = props;
  const [checked, setChecked] = useState(false);

  // 체크 토글하기
  const toggleChekced = () => {
    if (readOnly) return;
    setChecked((prev) => !prev);
    if (onChangeEvent) onChangeEvent();
  };

  useEffect(() => {
    setChecked(isChecked || false);
  }, [isChecked]);

  return (
    <_Error propsList={props} requiredList={["inputId", "onChangeEvent"]}>
      <>
        <Input
          className={getAllComponentsClassName(
            "mcm-checkox-unit-input",
            classNames?.input
          )}
          id={inputId}
          type="checkbox"
          onChange={toggleChekced}
        />
        <Label
          className={getAllComponentsClassName(
            "mcm-checkbox-unit-label",
            classNames?.label
          )}
          id={labelId}
          htmlFor={inputId}
          isChecked={checked}
          mainColor={mainColor || "#00c4ff"}
          readOnly={readOnly}
        />
      </>
    </_Error>
  );
}

interface StyleTypes {
  isChecked?: boolean;
  mainColor?: string;
  readOnly?: boolean;
}

export const Input = styled.input`
  display: none;
  transition: all 0.25s ease;
`;

export const Label = styled.label`
  display: inline-block;
  min-width: 20px;
  min-height: 20px;
  border: 2px solid #bcbcbc;
  border-color: ${(props: StyleTypes) => props.isChecked && props.mainColor};
  border-radius: 100%;
  cursor: ${(props) => (props.readOnly ? "default" : "pointer")};
  transition: all 0.25s ease;
  position: relative;

  ::after,
  ::before {
    position: absolute;
    content: "";
    width: 10px;
    height: 2px;
    background-color: ${(props) => props.mainColor};
    opacity: ${(props) => Number(props.isChecked)};
  }

  ::after {
    transform: rotate(45deg);
    width: 5px;
    top: 9px;
    left: 2.5px;
    border-radius: 50%;
  }

  ::before {
    transform: rotate(-45deg);
    left: 4.5px;
    top: 7.5px;
    border-radius: 50%;
  }
`;
