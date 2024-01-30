import React, { useState } from "react";
import "./tictactoe.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));

  return (
    <div className="main-div">
      <h1>
        Tic Tac Toe using <span>ReactJS</span>
      </h1>
      <div className="game-div">
        {board.map((value, index) => {
          return (
            <div className="box" key={index}>
              {value}
            </div>
          );
        })}
      </div>
      <button className="reset-btn">RESET</button>
    </div>
  );
};

export default TicTacToe;
