import { FormEvent } from "react";
import { CommonsTypes, ChildrenType } from "../commons.type";
export type ButtonUnitTypes = {
    onClickEvent: () => void;
    isDisable?: boolean;
    buttonType?: "button" | "submit" | "reset";
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
} & CommonsTypes & ChildrenType;
export type CloseButtonTypes = {
    buttonSize?: string;
    buttonWeight?: string;
    buttonColor?: string;
} & ButtonUnitTypes & CommonsTypes;
export type InputTypes = {
    onChangeEvent: (text: string) => void;
    onSubmitEvent?: (e?: FormEvent) => void;
    onResetEvent?: () => boolean;
    defaultValue?: string;
    placeHolder?: string;
    maxLength?: number;
    isTextArea?: boolean;
    delay?: number;
} & CommonsTypes;
