import React from "react";
import "./tictactoe.css";

const TicTacToe = () => {
  const [turn, setTurn] = React.useState("X");
  const [board, setBoard] = React.useState(Array(9).fill(""));
  const [disabledBoxes, setDisabledBoxes] = React.useState(
    Array(9).fill(false)
  );
  const [winner, setWinner] = React.useState(null);

  const checkWinner = () => {
    const possibleWaysToWin = [
      //rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      //cols
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      //diagonals
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < possibleWaysToWin.length; i++) {
      const [a, b, c] = possibleWaysToWin[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  };

  const handleClick = (index) => {
    if (checkWinner()) {
      setWinner(`${turn === "X" ? "O" : "X"} wins`);
      setDisabledBoxes(Array(9).fill(true));
      return;
    }

    if (board[index] === "" && !disabledBoxes[index]) {
      const newBoard = [...board];
      newBoard[index] = turn;
      setTurn(turn === "X" ? "O" : "X");
      setBoard(newBoard);

      const newDisabledBoxes = [...disabledBoxes];
      newDisabledBoxes[index] = true;
      setDisabledBoxes(newDisabledBoxes);
    }
  };

  const reset = () => {
    setBoard(Array(9).fill(""));
    setDisabledBoxes(Array(9).fill(false));
    setWinner(null);
  };

  return (
    <div className="maindiv">
      <button className="resetbtn" onClick={reset}>
        Reset
      </button>
      <div className="container">
        {board.map((value, index) => (
          <div
            key={index}
            className="box"
            onClick={() => handleClick(index)}
            disabled={disabledBoxes[index]}
          >
            {value}
          </div>
        ))}
      </div>
      <span>{winner}</span>
    </div>
  );
};

export default TicTacToe;
