import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <>
      <div className="experience">
        <div className="achievment">
          <div className="circle">4</div>
          <span>Years</span>
          <span>Experience</span>
        </div>

        <div className="achievment">
          <div className="circle">7+</div>
          <span>Completed </span>
          <span>Projects</span>
        </div>
        <div className="achievment">
          <div className="circle">2+</div>
          {/* <span>Years</span> */}
          <span>Companies</span>
          <span>Work</span>
        </div>
      </div>
    </>
  );
}

export default Experience;
