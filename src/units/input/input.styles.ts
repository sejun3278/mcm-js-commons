import styled from "@emotion/styled";
import { CSSProperties } from "react";

import { breakPoints } from "../../responsive";

interface StyleTypes {
  hasText?: string;
  isTextArea?: boolean;
  hasSubmitEvent?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 36px;

  .mcm-modal-contents {
    /* background-color: #aa5656; */
    /* color: white; */
    border: double 5px #aa5656;
    border-radius: 10px;
  }
`;

export const Fieldset = styled.fieldset`
  display: none;
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
  min-height: 80px;
  max-height: 400px;
  border: unset;
  resize: vertical;
  padding: 8px;
  transition: border-right-width 0.3s ease;
`;

export const BtnWrapper = styled.div`
  height: 100%;
  width: 0px;
  transition: all 0.3s;
  opacity: 0;
  cursor: default;

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
      // 텍스트가 빈 문자열일 경우
    } else {
      // textArea 태그를 사용한다면
      if (props.isTextArea) styles.width = "0px";
    }

    return styles;
  }}

  button {
    width: 100%;
    height: 100%;
    white-space: pre;
    cursor: text;

    ${(props) =>
      props.hasText && {
        cursor: "pointer",
      }}
  }

  .mcm-close-button-unit {
    ${(props) =>
      props.hasSubmitEvent && {
        borderLeft: "solid 1px black",
      }}

    ${(props) =>
      props.isTextArea && {
        borderLeft: "unset",
        borderTop: "solid 1px black",
      }};

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
`;

// export const ResetWrapper = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
//   width: 100%;
//   height: 100%;

//   .mcm-title-unit {
//     margin: 0px;
//     letter-spacing: -0.8px;
//     font-size: 24px;
//   }

//   @media ${breakPoints.mobile} {
//     .mcm-title-unit {
//       font-size: 18px;
//       margin: 10px 0px;
//     }
//   }
// `;

// export const ResetButtonWrapper = styled.div`
//   display: flex;
//   justify-content: space-around;
//   width: 100%;

//   button {
//     font-size: 16px;
//     padding: 0.5rem;
//     border-radius: 10px;
//     color: #999999;
//     font-weight: 700;
//     transition: all 0.3s;

//     :hover {
//       color: #aa5656;
//     }
//   }
// `;
