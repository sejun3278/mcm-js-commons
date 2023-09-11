import React, {
  ChangeEvent,
  MouseEvent,
  MutableRefObject,
  Ref,
  useRef,
  useState,
} from "react";

import {
  _SpanText,
  _PText,
  _Button,
  _Title,
  _Anchor,
  _Link,
  _Image,
  _CloseButton,
  _Input,
  _Error,
  _Checkbox,
} from "../../src";
import _PtextHTML from "../../src/units/text/p/html";
import _SpanTextWithHTML from "../../src/units/text/span/html";

export default function Test() {
  const [text, setText] = useState("bbb");
  // const _ref = useRef() as MutableRefObject<HTMLInputElement>;
  const _ref = useRef() as MutableRefObject<HTMLSpanElement>;

  const _submit = (e) => {
    e.preventDefault();
    alert(text);
  };

  const changeEvent = (text: string) => {
    // console.log(text);
    setText(text);
  };

  const clickEvent = (e?: MouseEvent) => {
    if (e) e.stopPropagation();
    console.log(e);
    clickEvent2();
  };

  const clickEvent2 = () => {
    console.log(123);
  };

  const test = (e?: MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  return (
    <>
      <_Button onClickEvent={test}>22</_Button>
      <_Checkbox
        inputId="aaa"
        isChecked
        onChangeEvent={() => {}}
        mainColor="red"
        readOnly
      />
      <_Error
        propsList={{ children: [<div>1</div>, <div>2</div>] }}
        requiredList={["children"]}
        mouduleName="aaa"
      >
        <div>asdasd</div>
      </_Error>

      {/* <_Input inputClassName="111" isTextArea onChangeEvent={() => {}} />
      <_Button onClickEvent={clickEvent}>테스트</_Button>
      <_Error errorMessage="asdasd"></_Error> */}
      {/* <_Button onClickEvent={() => {}}>222</_Button> */}
      {/* <_SpanTextWithHTML
        dangerouslySetInnerHTML="111"
        _ref={_ref}
      ></_SpanTextWithHTML> */}
      {/* <button onClick={() => changeEvent("")}>초기화</button>
      <div>
        <form onSubmit={_submit}>
          <_Input
            onChangeEvent={changeEvent}
            placeHolder="모듈 입력"
            onSubmitEvent={_submit}
            delay={200}
            defaultValue="aaa"
            inputRef={_ref}
            // readOnly
            // value={text}
            isTextArea
            // inputType="password"
          />
        </form>
      </div> */}
      {/* <input /> */}
      {/* <_CloseButton onClickEvent={() => alert(1)} buttonType="button" /> */}
      {/* <_Anchor>???</_Anchor>
      <_Link>???</_Link>
      <_Image />
      <_CloseButton /> */}
    </>
  );
}
