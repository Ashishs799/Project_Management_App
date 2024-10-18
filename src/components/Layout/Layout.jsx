import React from "react";
import Board from "../Board/Board";
import { Header } from "../Header/Header";
import TaskForm from "../TaskForm/TaskForm";

export const Layout = () => {
  return (
    <div className="layout m-0-60">
      <Header />
      <Board />
    </div>
  );
};
