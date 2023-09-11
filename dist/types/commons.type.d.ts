import { CSSProperties, MutableRefObject } from "react";
export interface CommonsTypes {
    className?: string;
    id?: string;
    styles?: CSSProperties;
}
export interface ChildrenType {
    children?: React.ReactNode;
}
export type PTagRefType = {
    _ref?: MutableRefObject<HTMLParagraphElement>;
};
export type SpanTagRefType = {
    _ref?: MutableRefObject<HTMLSpanElement>;
};
export type ButtonTagRefType = {
    _ref?: MutableRefObject<HTMLButtonElement>;
};
