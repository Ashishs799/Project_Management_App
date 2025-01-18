import React from "react";
import "./Column.css";
import { GoDotFill } from "react-icons/go";

export const Column = ({ column, tasks }) => {
  const getStatus = () => {
    switch (column) {
      case "Backlog":
        return "_purple";
      case "Todo":
        return "_yellow";
      case "On-going":
        return "_blue";
      case "Done":
        return "_green";
      default:
        return "";
    }
  };
  return (
    <div className="cols">
      <span className="flex">
        <GoDotFill className={getStatus()} /> {column}
      </span>
    </div>
  );
};
