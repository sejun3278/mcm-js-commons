import { PText } from "../..";
import DOMPurify from "dompurify";

import CommonsHooksComponents from "../../../../hooks";
import { TextHTMLUnitTypes } from "../../../../types/units";
import { useEffect, useState } from "react";

// dangerouslySetInnerHTML 속성을 사용할 수 있는 P Text Component
export default function _PTextWithHtml(props: TextHTMLUnitTypes) {
  const [render, setRender] = useState(false);
  const { getAllComponentsClassName } = CommonsHooksComponents();
  const { styles, className, isError, dangerouslySetInnerHTML } = props;

  useEffect(() => {
    // window 객체가 있을 때만 해당 컴포넌트 렌더하기
    setRender(true);
  }, []);

  const getRender = () => {
    return !dangerouslySetInnerHTML ? (
      <PText isError={true}>
        {`<_PTextWithHtml /> : * dangerouslySetInnerHTML props가 필요합니다.`}
      </PText>
    ) : (
      <PText
        style={styles}
        className={getAllComponentsClassName("mcm-p-unit", className)}
        isError={isError}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(dangerouslySetInnerHTML || ""),
        }}
      />
    );
  };

  return (render && getRender()) || <></>;
}
