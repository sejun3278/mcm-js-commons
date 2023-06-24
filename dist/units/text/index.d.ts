/// <reference types="react" />
import { TextUnitTypes, TextUnitAddTypes } from "../../types/units";
export default function _Text(props: TextUnitTypes & TextUnitAddTypes): JSX.Element;
export interface StyleTypes {
    isError?: boolean;
}
export declare const PText: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & StyleTypes, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, {}>;
export declare const SpanText: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & StyleTypes, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
