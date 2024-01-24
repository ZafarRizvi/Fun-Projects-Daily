import React from "react";
import "./TodoItems.css";

const TodoItems = (props) => {
  const todoItem = props.todoitem;
  return (
    <div className="todo-item-div">
      <h3>{todoItem}</h3>
      <div className="icon-div">
        <h3>E</h3>
        <h3>D</h3>
      </div>
    </div>
  );
};

export default TodoItems;
