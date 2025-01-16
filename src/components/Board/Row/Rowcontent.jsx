import React, { useEffect } from "react";
import "./Rowcontent.css";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";

const Rowcontent = ({ tasks }) => {
  const getPriorityClass = (priority) => {
    switch (priority.toLowerCase()) {
      case "low":
        return "green";
      case "medium":
        return "yellow";
      case "high":
        return "orange";
      case "critical":
        return "red";
      default:
        return "";
    }
  };

  return (
    <div className="row-container">
      {tasks && tasks.length > 0
        ? tasks.map((task, index) => {
            const deadlineDate = new Date(task.deadline); // Input date for each task

            const formattedDate = deadlineDate.toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
            });
            return (
              <div key={index} className="row-content ">
                <div className="flex_space prior-time">
                  <span
                    className={`priority ${getPriorityClass(
                      task.priority
                    )} pad-10`}
                  >
                    {task.priority}
                  </span>
                  <span className="flex " style={{ cursor: "pointer" }}>
                    <PiDotsThreeOutlineFill />
                  </span>
                </div>
                <span className="task">{task.task}</span>
                <div className="tag-time flex_space">
                  <span className="flex deadline">
                    <SlCalender />
                    {formattedDate}
                  </span>
                  <span className="tag pad-10">#{task.tags}</span>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Rowcontent;
