/// <reference types="react" />
import { ButtonUnitTypes } from "../../types/units";
export default function _Button({ children, className, onClickEvent, styles, isDisable, }: ButtonUnitTypes): JSX.Element;
interface StylesTypes {
    isDisable?: boolean;
}
export declare const Button: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & StylesTypes, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export {};
