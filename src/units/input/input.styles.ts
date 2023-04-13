import styled from "@emotion/styled";
import { CSSProperties } from "react";

interface StyleTypes {
  hasText?: string;
  isTextArea?: boolean;
  hasSubmitEvent?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Fieldset = styled.fieldset`
  border: unset;
  padding: 0px;
  height: 100%;
  margin: 0;

  legend {
    display: none;
  }
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border: solid 1px black;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  border: unset;
  font-size: 16px;
  border-radius: 0px;
  transition: all 0.3s;
  padding: 8px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  /* height: 100px; */
  min-height: 80px;
  max-height: 400px;
  border: unset;
  resize: vertical;
  padding: 8px;
  transition: border-right-width 0.3s ease;
  /* border-right: dotted 1px gray;
  border-right-width: 0px;

  ${(props: StyleTypes) =>
    props.hasText && {
      borderRightWidth: "2px",
    }} */
`;

export const BtnWrapper = styled.div`
  height: 100%;
  width: 0px;
  transition: all 0.3s;
  opacity: 0;

  ${(props: StyleTypes) => {
    const styles: { [key: string]: string | number } & CSSProperties = {};

    if (props.isTextArea) styles.position = "unset";

    // 텍스트가 있을 경우 기본 오픈
    if (props.hasText) {
      styles.opacity = 1;
      styles.width = "25px";

      if (props.hasSubmitEvent && !props.isTextArea) styles.width = "50px";
    }

    return styles;
  }};
`;

export const BtnItems = styled.div`
  position: absolute;
  width: 0px;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.3s;
  opacity: 0;
  border-left: dotted 2px gray;

  ${(props: StyleTypes) => {
    const styles: { [key: string]: string | number } & CSSProperties = {};

    if (props.isTextArea) styles.flexDirection = "column";

    // 텍스트가 있을 경우 기본 오픈
    if (props.hasText) {
      styles.opacity = 1;
      styles.width = "25px";

      if (props.hasSubmitEvent) styles.width = "50px";

      if (props.isTextArea) {
        styles.width = "25px";
      }
    } else {
      if (props.isTextArea) styles.width = "0px";
    }

    return styles;
  }}

  button {
    width: 100%;
    height: 100%;
    white-space: pre;
  }

  .mcm-close-button-unit {
    ::before,
    ::after {
      width: 15px;
    }
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  ::after,
  ::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border: solid 1px black;
    border-radius: 100%;
  }
`;
