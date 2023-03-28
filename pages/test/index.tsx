import React from "react";
import { _SpanText, _PText, _Button } from "../../src";
import _PtextHTML from "../../src/units/text/p/html";
import _SpanTextWithHTML from "../../src/units/text/span/html";
import _CloseButton from "../../src/units/button/close";

import CommonsHooksComponents from "../../src/hooks";

export default function Test() {
  return <_SpanTextWithHTML dangerouslySetInnerHTML="<b>123</b>" />;
}
