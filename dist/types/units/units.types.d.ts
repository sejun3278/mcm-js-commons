import { FormEvent, MouseEvent, MutableRefObject } from "react";
import { CommonsTypes, ChildrenType } from "../commons.type";
export type ButtonUnitTypes = {
    onClickEvent: (e?: MouseEvent<HTMLButtonElement>) => void;
    isDisable?: boolean;
    buttonType?: "button" | "submit" | "reset";
    buttonRef?: MutableRefObject<HTMLButtonElement>;
} & CommonsTypes & ChildrenType;
export type ImageUnitTypes = {
    src: string;
} & CommonsTypes;
export interface TextUnitAddTypes {
    type?: "p" | "span";
}
export interface TextErrorType {
    isError?: boolean;
}
export type TextUnitTypes = TextErrorType & CommonsTypes & ChildrenType;
export type TextHTMLUnitTypes = {
    dangerouslySetInnerHTML: string;
} & TextErrorType & CommonsTypes;
export type TitleUnitTypes = {
    titleLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & CommonsTypes & ChildrenType;
export type AnchorUnitTypes = {
    href: string;
    notTarget?: boolean;
} & CommonsTypes & ChildrenType;
export type LinkUnitTypes = {
    href: string;
    replace?: boolean;
} & CommonsTypes & ChildrenType;
export type CloseButtonTypes = {
    buttonSize?: string;
    buttonWeight?: string;
    buttonColor?: string;
} & ButtonUnitTypes & CommonsTypes;
export type InputTypes = {
    onChangeEvent: (text: string) => void;
    onSubmitEvent?: (e?: FormEvent) => void;
    onResetConfirm?: () => boolean;
    value?: string;
    defaultValue?: string;
    placeHolder?: string;
    maxLength?: number;
    isTextArea?: boolean;
    delay?: number;
    inputRef?: MutableRefObject<HTMLInputElement | HTMLTextAreaElement>;
    inputType?: "text" | "password";
    name?: string;
    readOnly?: boolean;
    inputClassName?: string;
} & CommonsTypes;
