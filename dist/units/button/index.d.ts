import React from "react";
interface StyleTypes {
    children: React.ReactNode;
    className?: string;
    onClickEvent: () => void;
}
export default function _Button({ children, className, onClickEvent, }: StyleTypes): JSX.Element;
export {};
