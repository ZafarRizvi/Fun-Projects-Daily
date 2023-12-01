import { useState } from "react";
import Listcard from "./Listcard";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList((prevTodoList) => {
      return [...prevTodoList, { id: uuidv4(), text: value, done: false }];
    });
    setValue("");
  };

  const handleDelete = (id) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <div className="flex w-screen h-screen items-center justify-center">
        <div className="border border-orange-500 bg-orange-200 p-3 rounded-xl w-1/2">
          <h1 className="text-xl text-center font-bold">My Todo</h1>
          <form
            className="flex flex-row justify-between m-2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              id="task"
              placeholder="Add Task"
              className="font-bold py-1 px-2 mr-2 rounded w-10/12"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              Add Task
            </button>
          </form>
          <br />
          <h1 className="text-xl text-center font-bold">Tasks</h1>
          {todoList.map((item) => {
            return (
              <Listcard
                key={item.id}
                text={item.text}
                done={item.done}
                onDelete={() => {
                  handleDelete(item.id);
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
