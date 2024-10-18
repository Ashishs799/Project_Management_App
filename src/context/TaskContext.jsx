import { createContext, useEffect, useRef, useState } from "react";

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

      // Set a flag in localStorage to indicate the form has been shown
      localStorage.setItem("isFormShown", true);
    }
  }, [name]);

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
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
