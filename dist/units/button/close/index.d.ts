/// <reference types="react" />
import { CloseButtonTypes } from "../../../types/units";
export default function _CloseButton({ className, buttonSize, // 버튼 사이즈
buttonWeight, // 버튼 굵기 조절
buttonColor, disable, // 닫기 비활성화
onClickEvent, }: CloseButtonTypes): JSX.Element;
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
