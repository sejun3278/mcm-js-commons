import { CommonsTypes, ChildrenType } from "../commons.type";
export type ButtonUnitTypes = {
    onClickEvent: () => void;
    isDisable?: boolean;
} & CommonsTypes & ChildrenType;
export type ImageUnitTypes = {
    src: string;
} & CommonsTypes;
export interface TextUnitAddTypes {
    type?: "p" | "span";
}
export interface TextUnitDefaultType {
    dangerouslySetInnerHTML?: string;
    isError?: boolean;
}
export type TextUnitTypes = TextUnitDefaultType & CommonsTypes & ChildrenType;
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
    onClickEvent: () => void;
    buttonSize?: string;
    buttonWeight?: string;
    disable?: boolean;
} & CommonsTypes;
