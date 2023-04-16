import { ChangeEvent, MutableRefObject } from "react";
import { InputTypes } from "../../types/units";
export interface InputIProps {
    text: string;
    _onChangeEvent: (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => void;
    resetEvent: () => void;
    _inputRef: MutableRefObject<HTMLInputElement & HTMLTextAreaElement>;
}
export default function _Input(props: InputTypes): JSX.Element;
