import React, { useCallback, useState } from "react";
import "./App.css";
import TodoItems from "./components/TodoItems/TodoItems";

const App = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState(["Task 1", "Task 2", "Task 3"]);

  const addTaskFtn = useCallback(() => {
    if (task) {
      setTodoList([...todoList, task.toString()]);
      setTask("");
    }
  }, [setTask, setTodoList, todoList, task]);

  return (
    <div className="main-div">
      <div className="inner-div">
        <h1>Get Things Done!</h1>
        <div className="line"></div>
        <div className="input-form">
          <input
            className="task-input"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="What is the task Today"
          />

          <button className="add-task-btn" onClick={addTaskFtn}>
            Add Task
          </button>
        </div>
        <div className="line"></div>
        <div className="todo-div">
          {todoList.map((todoitem) => {
            return <TodoItems todoitem={todoitem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
