import React, { useEffect } from "react";

const Rowcontent = ({ tasks }) => {
  return (
    <div className="row-content">
      {tasks && tasks.length > 0
        ? tasks.map((task, index) => (
            <div key={index}>
              <span>{task.task}</span>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Rowcontent;
