import React, { useState } from "react";
import "./tictactoe.css";
import crossIcon from "./../asserts/cross.png";
import circleIcon from "./../asserts/circle.png";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("O");
  const [disabledBoxes, setDisabledBoxes] = useState(Array(9).fill(false));

  const handleClick = (index) => {
    if (board[index] === "" && !disabledBoxes[index]) {
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  return (
    <div className="main-div">
      <h1>
        Tic Tac Toe using <span>ReactJS</span>
      </h1>
      <div className="game-div">
        {board.map((value, index) => {
          return (
            <div
              className="box"
              key={index}
              onClick={() => handleClick(index)}
              disabled={disabledBoxes[index]}
            >
              {value}
            </div>
          );
        })}
      </div>
      <h1 className="won-msg">
        Turn ={" "}
        <img
          src={turn === "X" ? crossIcon : circleIcon}
          alt={turn === "X" ? "Cross icon" : "Circle icon"}
        />
      </h1>
      <button className="reset-btn">RESET</button>
    </div>
  );
};

export default TicTacToe;
