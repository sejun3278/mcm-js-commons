/// <reference types="react" />
export default function _Checkbox(props: {
    inputId: string;
    onChangeEvent: () => void;
    labelId?: string;
    isChecked?: boolean;
    classNames?: {
        input?: string;
        label?: string;
    };
    mainColor?: string;
    readOnly?: boolean;
}): JSX.Element;
interface StyleTypes {
    isChecked?: boolean;
    mainColor?: string;
    readOnly?: boolean;
}
export declare const Input: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
}, import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
export declare const Label: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & StyleTypes, import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
export {};
