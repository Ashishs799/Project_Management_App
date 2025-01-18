import { createContext, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [name, setName] = useState("Project");

  const [showForm, setShowForm] = useState(false);
  const [showProjectNameForm, setShowProjectNameForm] = useState(false);
  const formRef = useRef(null);
  const showFormHandler = () => {
    setShowForm(true);
  };
  const setProjectName = (value) => {
    localStorage.setItem("p_name", value);
    setName(value);
  };
  const hideFormHandler = () => {
    setShowForm(false);
  };

  const showProjectNameFormHandler = () => {
    setShowProjectNameForm(true);
  };

  const hideProjectNameFormHandler = () => {
    setShowProjectNameForm(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        hideFormHandler();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hideFormHandler]);

  useEffect(() => {
    // Check if the form has been shown before
    const isFormShown = localStorage.getItem("isFormShown");
    const pname = localStorage.getItem("p_name");
    console.log("YO NAM", name);

    // Show the form if it hasn't been shown yet
    if ((!isFormShown && name === "Project") || name === "" || !pname) {
      setTimeout(() => {
        showProjectNameFormHandler(); // Show the form
      }, 2000);
      localStorage.setItem("isFormShown", true);
    }
  }, [name]);

  const [tasks, setTasks] = useState([]);
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

  const removeTask = (taskId) => {
    const removedTask = tasks.filter((task) => task.id !== taskId);
    setTasks(removedTask);
  };

  const addTask = (newTask) => {
    const taskWithId = {
      ...newTask,
      id: uuidv4(),
    };
    const updatedTasks = [...tasks, taskWithId];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const value = {
    showForm,
    setShowForm,
    showFormHandler,
    hideFormHandler,
    showProjectNameFormHandler,
    hideProjectNameFormHandler,
    showProjectNameForm,
    formRef,
    setProjectName,
    setName,
    name,
    tasks,
    handleMoveTask,
    removeTask,
    addTask,
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
