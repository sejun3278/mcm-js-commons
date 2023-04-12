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
  const [text, setText] = useState("");
  const changeEvent = (text: string) => {
    setText(text);
  };

  return (
    <>
      {/* <_Title className="123123">asdas</_Title> */}
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <_Input
            onChangeEvent={changeEvent}
            placeHolder="모듈 입력"
            isTextArea
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
