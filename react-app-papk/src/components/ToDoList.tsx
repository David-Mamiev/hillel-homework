import { last } from "lodash";
import ToDoItem from "./ToDoItem"; 
import { list } from "../constants"; 
// eslint-disable-next-line
import ExampleClassComponent from "./ExampleClassComponent";
import { useState, useEffect } from "react";
import { Item } from "../interfaces";
import ToDoInput from "./ToDoInput"; 



const ToDoList = () => {
    const [tasks, setTasks] = useState<Item[]>([]);

    const handleAddTask = (value:string) => {
        const lastTask = last(tasks);
        setTasks([
            ...tasks,
            {
                id: lastTask ? lastTask.id + 1 : 1,
                title: value,
            },
        ]);
    };

    useEffect(() => {
        setTasks(list);
    }, []); 
    return (
        <div className="to-do-list__wrapper">
            <div className="to-do-list__input__wrapper">
                <ToDoInput onSelectTitle={handleAddTask} />
            </div>
            <div  className="to-do-list__items__wrapper">
                {tasks.map((item) => 
                    !item.hidden ? <ToDoItem key={item.id} item={item} /> : null
                )}
            </div>
        </div>
    )
};
export default ToDoList;