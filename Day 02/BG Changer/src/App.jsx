import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const generatePassword = useCallback(() => {
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+";

    let characters = "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    setPassword(createPassword(characters));
  }, [length, includeNumbers, includeSymbols, setPassword]);

  const createPassword = (characters) => {
    let password = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
    return password;
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSymbols, generatePassword]);
  return (
    <>
      <div className="bg-black w-screen h-screen flex">
        <div className="bg-white h-max w-1/2 p-2 m-auto rounded-xl">
          <h1 className="text-center text-xl font-bold mb-5">
            Password Generator
          </h1>
          <div className="flex flex-row m-auto">
            <input
              type="text"
              value={password}
              placeholder="Password"
              className="border-2 border-gray-400 rounded-lg p-2 w-full"
              readOnly
              ref={passwordRef}
            />
            <button
              className="border-2 border-gray-400 rounded-lg p-2 font-bold"
              onClick={copyPassword}
            >
              Copy
            </button>
          </div>
          {/* main div */}
          <div className="flex flex-row justify-evenly mt-5">
            {/* Length div */}
            <div className="flex flex-row">
              <input
                type="range"
                min="6"
                max="20"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="mr-2"
              />
              <label className="text-orange-500 font-bold">
                Length: {length}
              </label>
            </div>
            {/* Include Numbers div */}
            <div className="flex flex-row">
              <input
                type="checkbox"
                className="mr-2"
                defaultChecked={includeNumbers}
                onChange={(e) => setIncludeNumbers((prev) => !prev)}
              />
              <label className="font-bold">Numbers</label>
            </div>
            {/* Include Symbols div */}
            <div className="flex flex-row">
              <input
                type="checkbox"
                className="mr-2"
                defaultChecked={includeSymbols}
                onChange={(e) => setIncludeSymbols((prev) => !prev)}
              />
              <label className="font-bold">Symbols</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
