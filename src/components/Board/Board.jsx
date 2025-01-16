import React from "react";
import "./Board.css";
import { Column } from "./Column/Column";
import { TaskCard } from "./TaskCard/TaskCard";
import { Row } from "./Row/Row";

const Board = () => {
  const columns = ["Backlog", "Todo", "On-going", "Done"];

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return (
    <div>
      <div className="board">
        <div className="board_wrapper">
          <div className="flex_around columns">
            {columns.map((column) => (
              <Column
                column={column}
                key={column}
                tasks={tasks.filter(
                  (task) => task.status.toLowerCase() === column.toLowerCase()
                )}
              />
            ))}
          </div>
          <Row />
        </div>
      </div>
    </div>
  );
};

export default Board;
