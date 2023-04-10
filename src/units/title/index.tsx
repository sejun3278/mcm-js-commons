import CommonsHooksComponents from "../../hooks";
import { TitleUnitTypes } from "../../types/units";

const filter = Array.from(new Array(5), (_, i) => `h${i + 2}`);
// h1 ~ h6로 표현되는 타이틀 컴포넌트
export default function _Title({
  children,
  styles,
  className,
  titleLevel,
}: TitleUnitTypes) {
  const { getAllComponentsClassName, getOriginTemplate } =
    CommonsHooksComponents();

  // 렌더할 태그명
  const TitleTag =
    (filter.includes(titleLevel || "h1") ? titleLevel : "h1") || "h1";

  // 추가할 클래스 네임
  const _className = getAllComponentsClassName("mcm-title-unit", className);

  // 추가할 스타일 정보
  let _styles = {};
  if (styles) {
    _styles = Object.entries(styles).reduce(
      (acc: { [key: string]: string }, cur) => {
        acc[getOriginTemplate(cur[0])] = getOriginTemplate(cur[1]);
        return acc;
      },
      {}
    );
  }

  return (
    <TitleTag className={_className} style={_styles}>
      {children}
    </TitleTag>
  );
}
