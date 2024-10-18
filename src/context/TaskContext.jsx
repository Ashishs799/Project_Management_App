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
    setTimeout(() => {
      showProjectNameFormHandler();
    }, 2000);
  }, []);
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
    name,
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
