import React, { ChangeEvent, useState } from "react";

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
} from "../../src";
import _PtextHTML from "../../src/units/text/p/html";
import _SpanTextWithHTML from "../../src/units/text/span/html";

export default function Test() {
  const [text, setText] = useState("bbb");

  const _submit = (e) => {
    e.preventDefault();
    alert(text);
  };

  const changeEvent = (text: string) => {
    // console.log(text);
    setText(text);
  };

  return (
    <>
      {/* <_Title className="123123">asdas</_Title> */}
      <div>
        <form onSubmit={_submit}>
          <_Input
            onChangeEvent={changeEvent}
            placeHolder="모듈 입력"
            onSubmitEvent={_submit}
            delay={2000}
            onResetEvent={() => {
              alert("초기화 완료");
            }}
            // defaultValue="aaa"
            value={text}
            // isTextArea
          />
        </form>
      </div>

      {/* <input /> */}
      {/* <_CloseButton onClickEvent={() => alert(1)} buttonType="button" /> */}

      {/* <_Anchor>???</_Anchor>
      <_Link>???</_Link>
      <_Image />
      <_CloseButton /> */}
    </>
  );
}
