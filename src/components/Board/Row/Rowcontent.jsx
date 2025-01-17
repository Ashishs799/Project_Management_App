import React, { useState } from "react";
import "./Rowcontent.css";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { IoIosMove } from "react-icons/io";
import { LiaEdit } from "react-icons/lia";
import { MdOutlineDelete } from "react-icons/md";

const Rowcontent = ({ tasks, onMove, parentTasks }) => {
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const handleMove = (taskIndex, newStatus) => {
    const globalIndex = parentTasks.findIndex(
      (task) => task.task === tasks[taskIndex].task
    );
    onMove(globalIndex, newStatus);
    setDropdownVisible(null);
  };

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
            const deadlineDate = new Date(task.deadline);

            const formattedDate = deadlineDate.toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
            });
            return (
              <div key={index} className="row-content">
                <div className="flex_space">
                  <span
                    className={`priority ${getPriorityClass(
                      task.priority
                    )} pad-10`}
                  >
                    {task.priority}
                  </span>
                  <nav className="dropdown-menu">
                    <button
                      className="dropdown-toggle"
                      onClick={() =>
                        setDropdownVisible(
                          dropdownVisible === index ? null : index
                        )
                      }
                    >
                      <PiDotsThreeOutlineFill />
                    </button>
                    {dropdownVisible === index && (
                      <ul className="dropdown-list">
                        <li>
                          <span className="flex_start">
                            <IoIosMove /> Move
                            <ul className="nested-dropdown">
                              <li onClick={() => handleMove(index, "backlog")}>
                                Backlog
                              </li>
                              <li onClick={() => handleMove(index, "todo")}>
                                Todo
                              </li>
                              <li onClick={() => handleMove(index, "on-going")}>
                                On-going
                              </li>
                              <li onClick={() => handleMove(index, "done")}>
                                Done
                              </li>
                            </ul>
                          </span>
                        </li>
                        <li>
                          <span className="flex_start">
                            <LiaEdit />
                            Edit
                          </span>
                        </li>
                        <li>
                          <span className="flex_start">
                            <MdOutlineDelete />
                            Delete
                          </span>
                        </li>
                      </ul>
                    )}
                  </nav>
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
