import React, { useState, useEffect, useContext } from "react";
import "./Row.css";
import Rowcontent from "./Rowcontent";
import { TaskContext } from "../../../context/TaskContext";

export const Row = () => {
  const { tasks, handleMoveTask } = useContext(TaskContext);

  const backlogTasks = tasks.filter((task) => task.status === "backlog");
  const todoTasks = tasks.filter((task) => task.status === "todo");
  const ongoingTasks = tasks.filter((task) => task.status === "on-going");
  const doneTasks = tasks.filter((task) => task.status === "done");
  return (
    <div className="row">
      <Rowcontent
        tasks={backlogTasks}
        onMove={handleMoveTask}
        parentTasks={tasks}
      />
      <Rowcontent
        tasks={todoTasks}
        onMove={handleMoveTask}
        parentTasks={tasks}
      />
      <Rowcontent
        tasks={ongoingTasks}
        onMove={handleMoveTask}
        parentTasks={tasks}
      />
      <Rowcontent
        tasks={doneTasks}
        onMove={handleMoveTask}
        parentTasks={tasks}
      />
    </div>
  );
};
