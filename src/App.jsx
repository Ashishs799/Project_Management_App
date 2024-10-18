import { useContext, useState } from "react";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import TaskForm from "./components/TaskForm/TaskForm";
import { TaskContext } from "./context/TaskContext";
import Project_name_form from "./Common/Project_name_form";

function App() {
  const { showForm, showProjectNameForm } = useContext(TaskContext);
  return (
    <div className="app">
      <Layout />
      {showProjectNameForm ? <Project_name_form /> : ""}
      {showForm ? <TaskForm /> : ""}
    </div>
  );
}

export default App;
