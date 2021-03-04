import { FC, useState } from "react";
import { ToDoInputProps } from "./interfaces";

const ToDoInput: FC<ToDoInputProps>= ({ onSelectTitle }) => {
    const [value, setValue] = useState('');
    const handlePressEnter = () => {
        onSelectTitle(value);
        setValue('');
    };
    return (
        <input 
            value={value}
            onInput = {(e) => setValue((e.target as HTMLInputElement).value)}
            onKeyPress = {(e) => {
                if(e.code === "Enter") {
                    handlePressEnter();
                }
            }}
        />
    );
};
export default ToDoInput;