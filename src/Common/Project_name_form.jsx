import React, { useContext, useEffect, useState } from "react";
import "../components/TaskForm/TaskForm.css";
import { TaskContext } from "../context/TaskContext";
import { Button } from "./Button";
import { RxCross2 } from "react-icons/rx";

import { toast } from "react-toastify";

const Project_name_form = () => {
  const [projectNameInput, setProjectNameInput] = useState("");
  const {
    hideProjectNameFormHandler,
    showProjectNameFormHandler,
    showProjectNameForm,
    setProjectName,
    formRef,
  } = useContext(TaskContext);

  if (!showProjectNameForm) return null;
  const handleCreateProject = () => {
    if (projectNameInput !== "") {
      setProjectName(projectNameInput);
      hideProjectNameFormHandler();
    } else {
      toast.error("Set your project name.");
    }
  };

  return (
    <div>
      <div>
        <div ref={formRef} className="task-form">
          <RxCross2
            style={{
              position: "absolute",
              right: "4px",
              top: "4px",
              cursor: "pointer",
            }}
            onClick={hideProjectNameFormHandler}
          />
          <form>
            <label htmlFor="name">Project Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Set your project name"
              onChange={(e) => setProjectNameInput(e.target.value)}
            />

            <Button
              label={"Create project"}
              onClick={handleCreateProject}
              type={"button"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Project_name_form;
