import React from "react";
import "./Board.css";
import { Column } from "./Column/Column";
import { TaskCard } from "./TaskCard/TaskCard";

const Board = () => {
  return (
    <div>
      <div className="board">
        <div className="board_wrapper">
          <Column />
          <TaskCard />
        </div>
      </div>
    </div>
  );
};

export default Board;
