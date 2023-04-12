import styled from "@emotion/styled";

interface StyleTypes {
  hasText?: string;
  isTextArea?: boolean;
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
  border-right: dotted 1px gray;
  border-right-width: 0px;

  ${(props: StyleTypes) =>
    props.hasText && {
      borderRightWidth: "2px",
    }}
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 0px;
  transition: all 0.3s;
  opacity: 0;

  ${(props: StyleTypes) =>
    props.hasText && {
      width: "25px",
      opacity: 1,
    }}
`;

export const BtnItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
`;
