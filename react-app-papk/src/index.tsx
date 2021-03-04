import React from "react";
import ReactDom from "react-dom";
import ToDoList from "./components/ToDoList";
import './index.scss';

ReactDom.render(<ToDoList />, document.getElementById("root"));