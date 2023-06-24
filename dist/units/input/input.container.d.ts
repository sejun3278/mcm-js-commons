import { ChangeEvent, MutableRefObject } from "react";
import { InputTypes } from "../../types/units";
export interface InputIProps {
    _onChangeEvent: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    resetEvent: () => void;
    _inputRef: MutableRefObject<HTMLInputElement | HTMLTextAreaElement>;
    _itemsRef: MutableRefObject<HTMLDivElement>;
}
export default function _Input(props: InputTypes): JSX.Element;
