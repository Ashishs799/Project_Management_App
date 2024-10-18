import React, { useContext, useState } from "react";
import { Button } from "../../Common/Button";
import { CiEdit } from "react-icons/ci";

import "./Header.css";
import { TaskContext } from "../../context/TaskContext";

export const Header = () => {
  const { showFormHandler, name, showProjectNameFormHandler } =
    useContext(TaskContext);
  const editProjectName = () => {
    showProjectNameFormHandler();
  };

  const proj_name = localStorage.getItem("p_name") || name;
  return (
    <div className="header flex_space">
      <div className="name_edit flex_space" onClick={editProjectName}>
        <span className="proj_name ">{proj_name}</span>
        <CiEdit />
      </div>
      <Button label={"+ Add task"} onClick={showFormHandler} type={"button"} />
    </div>
  );
};
