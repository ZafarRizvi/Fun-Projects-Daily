import React from "react";
import "./tictactoe.css";
import Cicle from "./../asserts/circle.png";
import Cross from "./../asserts/cross-red.png";

const TicTacToe = () => {
  return (
    <div className="main-div">
      <h1>
        Tac Tac Toe in <span>ReactJS</span>
      </h1>
      <div className="game-div">
        <div className="row">
          <div className="box" id="box-1">
            <img src={Cicle} alt="circle" className="circle" />
          </div>
          <div className="box" id="box-2">
            <img src={Cross} alt="circle" className="circle" />
          </div>
          <div className="box" id="box-3"></div>
        </div>
        <div className="row">
          <div className="box" id="box-4"></div>
          <div className="box" id="box-5"></div>
          <div className="box" id="box-6"></div>
        </div>
        <div className="row">
          <div className="box" id="box-7"></div>
          <div className="box" id="box-8"></div>
          <div className="box" id="box-9"></div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
