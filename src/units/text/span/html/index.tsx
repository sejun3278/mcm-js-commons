import { useState, useEffect } from "react";
import { SpanText } from "../..";
import DOMPurify from "dompurify";

import { getAllComponentsClassName } from "../../../../hooks";
import { TextHTMLUnitTypes } from "../../../../types/units";
import { SpanTagRefType } from "../../../../types/commons.type";

// dangerouslySetInnerHTML 속성을 사용할 수 있는 Span Text Component
export default function _SpanTextWithHtml(
  props: TextHTMLUnitTypes & SpanTagRefType
) {
  const [render, setRender] = useState(false);
  const { styles, className, isError, dangerouslySetInnerHTML, _ref } = props;

  useEffect(() => {
    // window 객체가 있을 때만 해당 컴포넌트 렌더하기
    setRender(true);
  }, []);

  const getRender = () => {
    return !dangerouslySetInnerHTML ? (
      <SpanText isError={true} ref={_ref}>
        {`<_SpanTextWithHtml /> : * dangerouslySetInnerHTML props가 필요합니다.`}
      </SpanText>
    ) : (
      <SpanText
        style={styles}
        className={getAllComponentsClassName("mcm-span-unit", className)}
        isError={isError}
        ref={_ref}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(dangerouslySetInnerHTML || ""),
        }}
      />
    );
  };

  return (render && getRender()) || <></>;
}
