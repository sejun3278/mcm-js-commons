import styled from "@emotion/styled";
import { CSSProperties } from "react";

import { breakPoints } from "../../responsive";

interface StyleTypes {
  hasText?: string;
  isTextArea?: boolean;
  hasSubmitEvent?: boolean;
  hasHeight?: boolean;
  readOnly?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 36px;

  .mcm-modal-contents {
    border: double 5px #aa5656;
    border-radius: 10px;
  }

  .show-submit-buttons {
    .mcm-input-submit-button-wrapper,
    .mcm-input-submit-button-items {
      ${(props) => {
        const styles: { [key: string]: string | number } & CSSProperties = {
          width: "25px",
          visibility: "visible",
          opacity: 1,
        };

        if (props.hasSubmitEvent) styles.width = "50px";
        if (props.isTextArea) styles.width = "25px";

        return styles;
      }}
    }
  }

  .mcm-input-submit-button-items {
    ${(props: StyleTypes) => {
      const styles: { [key: string]: string | number } & CSSProperties = {};

      if (props.isTextArea) styles.flexDirection = "column";

      return styles;
    }}
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

  .mcm-textArea-unit {
    ${(props: StyleTypes) =>
      props.readOnly && {
        resize: "none",
      }}
  }
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
  height: 100%;
  min-height: 80px;
  border: unset;
  resize: vertical;
  padding: 8px;
  transition: border-right-width 0.3s ease;
`;

export const BtnWrapper = styled.div`
  height: 100%;
  width: 0px;
  transition: all 0.3s;
  visibility: hidden;
  opacity: 0;
  cursor: default;
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
  visibility: hidden;
  border-left: dotted 2px gray;

  button {
    width: 100%;
    height: 100%;
    white-space: pre;
    background-color: unset;
    border: unset;
    cursor: pointer;
    padding: 0;
  }

  .mcm-close-button-unit {
    ${(props: StyleTypes) =>
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
