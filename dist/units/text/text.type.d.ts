import { CSSProperties } from "react";
export interface TextPropsTypes {
    children: React.ReactNode;
    styles?: CSSProperties;
    className?: string;
}
export interface TextAddType {
    type?: "p" | "span";
}
