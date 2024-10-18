import React, { useContext, useEffect, useRef, useState } from "react";
import "./TaskForm.css";
import { Button } from "../../Common/Button";
import { TaskContext } from "../../context/TaskContext";

const TaskForm = () => {
  const { hideFormHandler, showForm, formRef } = useContext(TaskContext);
  const [tasks, setTasks] = useState([]);
  const [taskDetails, setTaskDetails] = useState({
    task: "",
    priority: "low",
    deadline: "",
    status: "backlog",
    tags: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTasks((prevTasks) => [...prevTasks, taskDetails]);

    setTaskDetails({
      task: "",
      priority: "low",
      deadline: "",
      status: "backlog",
      tags: "",
    });

    hideFormHandler();
  };

  useEffect(() => {
    if (tasks.length > 0) {
      console.log("Tasks array updated:", tasks);
    } else {
      console.log("Array is empty");
    }
  }, [tasks]);

  if (!showForm) return null;
  return (
    <div>
      <div ref={formRef} className="task-form">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="task">Task</label>
          <textarea
            id="task"
            name="task"
            rows="4"
            value={taskDetails.task}
            required
            onChange={handleInputChange}
          ></textarea>

          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            onChange={handleInputChange}
            value={taskDetails.priority}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>

          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={taskDetails.deadline}
            required
            onChange={handleInputChange}
          />

          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            onChange={handleInputChange}
            value={taskDetails.status}
          >
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
            value={taskDetails.tags}
            placeholder="e.g., Bug, Feature"
            onChange={handleInputChange}
          />

          <Button label={"Create task"} type={"submit"} />
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
