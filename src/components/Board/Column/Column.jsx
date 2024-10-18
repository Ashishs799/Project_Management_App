import React from "react";
import "./Column.css";

export const Column = () => {
  const columns = ["Backlog", "Todo", "On-going", "Done"];
  return (
    <div className="flex_space columns">
      {columns.map((column, index) => {
        return (
          <div className="cols" key={index}>
            <span>{column}</span>
          </div>
        );
      })}
    </div>
  );
};
