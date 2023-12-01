import { useState } from "react";

function App() {
  const [fValue, setFValue] = useState("0");

  return (
    <>
      <div className="flex justify-center h-screen items-center bg-black">
        <div className="bg-slate-400 w-fit h-fit px-5 py-3 rounded-lg">
          <div className="flex justify-center">
            <h1 className="font-bold text-lg pb-3">Calculator</h1>
          </div>
          <form className="flex flex-col">
            <input
              type="text"
              className="bg-slate-200 px-3 py-2 rounded-lg mb-3"
              placeholder="0"
              value={fValue}
              readOnly
            />
            <div className="grid grid-cols-4 gap-3">
              <button
                type="button"
                className="bg-slate-200 px-3 py-2 rounded-lg"
                onClick={() => setFValue("1")}
              >
                1
              </button>
              <button
                type="button"
                className="bg-slate-200 px-3 py-2 rounded-lg"
                onClick={() => setFValue("2")}
              >
                2
              </button>
              <button
                type="button"
                className="bg-slate-200 px-3 py-2 rounded-lg"
                onClick={() => setFValue("3")}
              >
                3
              </button>
              <button
                type="button"
                className="bg-slate-200 px-3 py-2 rounded-lg"
                onClick={() => setFValue("+")}
              >
                +
              </button>
              <button
                type="button"
                className="bg-slate-200 px-3 py-2 rounded-lg"
                onClick={() => setFValue("4")}
              >
                4
              </button>
              <button
                type="button"
                className="bg-slate-200 px-3 py-2 rounded-lg"
                onClick={() => setFValue("5")}
              >
                5
              </button>
              <button
                type="button"
                className="bg-slate-200 px-3 py-2 rounded-lg"
                onClick={() => setFValue("6")}
              >
                6
              </button>
              <button
                type="button"
                className="bg-slate-200 px-3 py-2 rounded-lg"
              >
                -
              </button>
              <button
                type="button"
                className="bg-slate-200 px-3 py-2 rounded-lg"
                onClick={() => setFValue("7")}
              >
                7
              </button>
              <button
                type="button"
                className="bg-slate-200 px-3 py-2 rounded-lg"
                onClick={() => setFValue("8")}
              >
                8
              </button>
              <button
                type="button"
                className="bg-slate-200 px-3 py-2 rounded-lg"
                onClick={() => setFValue("9")}
              >
                9
              </button>
              <button
                type="button"
                className="bg-slate-200 px-3 py-2 rounded-lg"
              >
                *
              </button>
              <button
                type="button"
                className="bg-slate-200 px-3 py-2 rounded-lg"
                onClick={() => setFValue("0")}
              >
                0
              </button>
              <button
                type="button"
                className="bg-slate-200 px-3 py-2 rounded-lg"
              >
                .
              </button>
              <button
                type="button"
                className="bg-slate-200 px-3 py-2 rounded-lg grid col-span-2"
              >
                =
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
