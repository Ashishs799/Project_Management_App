import React from "react";
import "./Row.css";
import Rowcontent from "./Rowcontent";

export const Row = () => {
  const taskStrings = localStorage.getItem("tasks");
  const tasks = taskStrings ? JSON.parse(taskStrings) : [];

  const backlogTasks = tasks.filter((task) => task.status === "backlog");
  const todoTasks = tasks.filter((task) => task.status === "todo");
  const ongoingTasks = tasks.filter((task) => task.status === "on-going");
  const doneTasks = tasks.filter((task) => task.status === "done");
  return (
    <div className="row">
      <Rowcontent tasks={backlogTasks} />
      <Rowcontent tasks={todoTasks} />
      <Rowcontent tasks={ongoingTasks} />
      <Rowcontent tasks={doneTasks} />
    </div>
  );
};
