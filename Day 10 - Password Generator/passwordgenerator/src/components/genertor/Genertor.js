import React, { useCallback, useEffect, useRef, useState } from "react";
import "./genertor.css";

const Genertor = () => {
  const [password, setPassword] = useState("");
  const [passLen, setPassLen] = useState(10);
  const [symbolsIncluded, setSymbolsIncluded] = useState(false);
  const [numIncluded, setNumIncluded] = useState(false);

  useEffect(() => {
    generatePassword();
  }, [passLen, symbolsIncluded, numIncluded]);

  const passRef = useRef(null);

  const generatePassword = useCallback(() => {
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]";

    if (symbolsIncluded) char += symbols;
    if (numIncluded) char += num;

    let pass = "";

    for (let i = 1; i <= passLen; i++) {
      const randomChar = char[Math.floor(Math.random() * char.length)];
      pass += randomChar;
    }

    setPassword(pass);
  }, [passLen, symbolsIncluded, numIncluded]);

  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="genertor-div">
      <h2>Password Genertor</h2>
      <div className="line"></div>
      <div className="pass-div">
        <input
          className="pass-feild"
          value={password}
          placeholder="Password"
          ref={passRef}
          readOnly
        />
        <button className="copy-btn" onClick={copyToClipboard}>
          Copy
        </button>
      </div>
      <div className="dependency-div">
        <div className="length-div">
          <input
            type="range"
            min={8}
            max={20}
            value={passLen}
            onChange={(e) => setPassLen(e.target.value)}
          />
          <h3>{passLen}</h3>
        </div>
        <div className="char-div">
          <input
            type="checkbox"
            value={symbolsIncluded}
            defaultChecked={symbolsIncluded}
            onClick={() =>
              setSymbolsIncluded((symbolsIncluded) => !symbolsIncluded)
            }
          />
          <h3>Symbols</h3>
        </div>
        <div className="num-div">
          <input
            type="checkbox"
            defaultChecked={numIncluded}
            value={numIncluded}
            onClick={() => setNumIncluded((numIncluded) => !numIncluded)}
          />
          <h3>Numbers</h3>
        </div>
      </div>
    </div>
  );
};

export default Genertor;
