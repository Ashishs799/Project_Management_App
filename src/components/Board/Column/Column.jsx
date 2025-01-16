import React from "react";
import "./Column.css";

export const Column = ({ column, tasks }) => {
  return (
    <div className="cols">
      <span>{column}</span>
    </div>
  );
};
