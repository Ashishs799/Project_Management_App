import React, { useContext, useState } from "react";
import "./Button.css";
import { TaskContext } from "../context/TaskContext";

export const Button = ({ label, onClick }) => {
  return (
    <div>
      <button type="button" className="button" onClick={onClick}>
        <span> {label}</span>
      </button>
    </div>
  );
};
