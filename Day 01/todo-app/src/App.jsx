import { useState } from "react";
import Listcard from "./Listcard";

function App() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList((prevTodoList) => {
      return [
        ...prevTodoList,
        { id: crypto.randomUUID(), text: value, done: false },
      ];
    });
    setValue("");
  };
  console.log(todoList);

  return (
    <>
      <div className="flex w-screen h-screen items-center justify-center">
        <div className="border border-orange-500 bg-orange-200 p-3 rounded-xl">
          <h1 className="text-xl text-center font-bold">My Todo</h1>
          <form
            className="flex flex-row justify-between m-2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              id="task"
              placeholder="Add Task"
              className="font-bold py-1 px-2 mr-2 rounded"
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
          <Listcard cardText={"Zafar Rizvi"} />
        </div>
      </div>
    </>
  );
}

export default App;
