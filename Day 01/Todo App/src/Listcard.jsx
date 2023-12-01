import React from "react";

const Listcard = (props) => {
  const [done, setDone] = React.useState(props.done);

  return (
    <>
      <div
        className="flex flex-row justify-between bg-gray-200 p-1 m-1 rounded-md font-bold"
        style={{
          backgroundColor: done ? "lightgray" : "white",
          color: done ? "white" : "black",
        }}
      >
        <h1 className="py-1 m-1">{props.text}</h1>
        <div className="flex flex-row">
          <button
            className="bg-green-500 hover:bg-green-700 m-1 text-white py-1 px-2 rounded"
            onClick={() => {
              setDone(!done);
            }}
          >
            {done ? "X" : "Done"}
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 m-1 text-white py-1 px-2 rounded"
            onClick={() => props.onDelete()}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Listcard;
