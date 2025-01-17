import React, { useState, useEffect } from "react";
import "./Row.css";
import Rowcontent from "./Rowcontent";

export const Row = () => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage
  useEffect(() => {
    const taskStrings = localStorage.getItem("tasks");
    const parsedTasks = taskStrings ? JSON.parse(taskStrings) : [];
    setTasks(parsedTasks);
  }, []);

  const handleMoveTask = (taskIndex, newStatus) => {
    const updatedTasks = tasks.map((task, index) =>
      index === taskIndex ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

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
