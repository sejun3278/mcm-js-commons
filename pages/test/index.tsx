import React from "react";
import { _SpanText, _PText } from "../../src";

export default function Test() {
  //   return <span dangerouslySetInnerHTML={{ __html: <span>123</span> }}></span>;
  return (
    <_SpanText
      dangerouslySetInnerHTML={`<span>1<span class='aa'>2</span>3</span>`}
    >
      bbb
    </_SpanText>
  );
}
