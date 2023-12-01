import { useState } from "react";

function App() {
  const [fValue, setFValue] = useState("0");

  const btnArr = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    ".",
    "0",
    "=",
    "/",
  ];

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
              {btnArr.map((btnText, index) => {
                return (
                  <button
                    key={index}
                    className="bg-slate-200 px-3 py-2 rounded-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      if (btnText === "=") {
                        setFValue(eval(fValue));
                      } else if (btnText === "C") {
                        setFValue("0");
                      } else {
                        if (fValue === "0") {
                          setFValue(btnText);
                        } else {
                          setFValue(fValue + btnText);
                        }
                      }
                    }}
                  >
                    {btnText}
                  </button>
                );
              })}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
