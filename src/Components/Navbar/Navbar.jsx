import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";

function Navbar() {
  return (
    <>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Faith </div>
          <Toggle />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>Home</li>
              <li>
                <a
                  href="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1148599434644264644"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Figma
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/njerimuiruri"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/faith-njeri-76892b211/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <button className="button n-button">Contact</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
