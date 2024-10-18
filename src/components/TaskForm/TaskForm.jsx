import React, { useContext, useEffect, useRef } from "react";
import "./TaskForm.css";
import { Button } from "../../Common/Button";
import { TaskContext } from "../../context/TaskContext";

const TaskForm = () => {
  const { hideFormHandler, showForm, formRef } = useContext(TaskContext);

  if (!showForm) return null;
  return (
    <div>
      <div ref={formRef} className="task-form">
        <form>
          <label htmlFor="task">Task</label>
          <textarea id="task" name="task" rows="4" required></textarea>

          <label htmlFor="priority">Priority</label>
          <select id="priority" name="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>

          <label htmlFor="deadline">Deadline</label>
          <input type="date" id="deadline" name="deadline" required />

          <label htmlFor="status">Status</label>
          <select id="status" name="status">
            <option value="backlog">Backlog</option>
            <option value="todo">To-do</option>
            <option value="on-going">On-Going</option>
            <option value="done">Done</option>
          </select>

          <label htmlFor="tags">Labels / Tags</label>
          <input
            type="text"
            id="tags"
            name="tags"
            placeholder="e.g., Bug, Feature"
          />

          <Button label={"Create task"} onClick={hideFormHandler} />
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
