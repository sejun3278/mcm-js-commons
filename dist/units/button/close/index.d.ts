/// <reference types="react" />
import { CloseButtonTypes } from "../../../types/units";
export default function _CloseButton(props: CloseButtonTypes): JSX.Element;
interface StyleTypes {
    buttonSize?: string;
    buttonWeight?: string;
    disable?: boolean;
    buttonColor?: string;
}
export declare const ButtonWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & StyleTypes, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export {};
