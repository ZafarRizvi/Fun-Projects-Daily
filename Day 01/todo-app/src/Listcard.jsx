import React from "react";

const Listcard = (props) => {
  return (
    <>
      <div className="flex flex-row justify-between bg-gray-400 p-1 m-1 rounded-md">
        <h1 className="py-1 m-1">{props.cardText}</h1>
        <div className="flex flex-row">
          <button className="bg-green-500 hover:bg-green-700 m-1 text-white py-1 px-2 rounded">
            Done
          </button>
          <button className="bg-red-500 hover:bg-red-700 m-1 text-white py-1 px-2 rounded">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Listcard;
