/// <reference types="react" />
import { CommonsTypes, ChildrenType } from "../commons.type";
export type ButtonUnitTypes = {
    children: React.ReactNode;
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
