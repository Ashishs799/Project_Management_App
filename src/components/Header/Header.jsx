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
  return (
    <div className="header flex_space">
      <div className="name_edit flex_space">
        <span className="proj_name " onClick={editProjectName}>
          {name}
        </span>
        <CiEdit />
      </div>
      <Button label={"+ Add task"} onClick={showFormHandler} />
    </div>
  );
};
