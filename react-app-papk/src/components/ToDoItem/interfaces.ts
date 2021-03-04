import { Item } from "../../interfaces";
import { Props } from "react";

export interface ToDoItemProps {
    item: Item;
}
export interface TextHolderProps {
    item: Item;
}

export interface CheckProps {
    onSelect: () => void
}