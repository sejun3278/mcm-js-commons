/// <reference types="react" />
export default function _Error<T>({ propsList, requiredList, children, mouduleName, }: {
    propsList: {
        [key: string]: T;
    };
    requiredList: Array<string>;
    children: JSX.Element;
    mouduleName?: string;
}): JSX.Element;
export declare const ErrorWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
export declare const RequiredList: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, {}>;
