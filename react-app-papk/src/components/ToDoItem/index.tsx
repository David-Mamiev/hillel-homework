import Check from "./Check";
import Remove from "./Remove";
import TextHolder from "./TextHolder";
import { FC, useState } from "react";
import { ToDoItemProps } from "./interfaces";
import classNames from 'classnames';

const ToDoItem  :FC<ToDoItemProps> = ({ item }) => {
    const [finished, setFiniched] = useState(false);
    return (
        <>
            <div 
                onClick={() => {setFiniched(!finished)}}
                className ={classNames({
                    "to-do-list__item--finished": finished,
                    "to-do-list__item": !finished,
                })}
            >
                <Check onSelect={() => setFiniched(!finished)} />
                <TextHolder item={item}/>
                <Remove/>
            </div>
            <div></div>
         </>   
    )
};
export default ToDoItem;
