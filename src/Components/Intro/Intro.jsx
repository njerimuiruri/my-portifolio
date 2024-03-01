import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import faith from "../../img/3.png";

import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
// import FloatingDiv from "./Components/FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";

import { motion } from "framer-motion";

function Intro() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = { duration: 2, type: "string" };
  return (
    <>
      <div className="Intro">
        <div className="i-left">
          <div className="i-name">
            <span style={{ color: darkMode ? "white" : "" }}>Heyy! I Am </span>
            <span>Faith Muiruri</span>

            <span>
              Hey there! 👋 I'm a tech enthusiast, coding artist, and full-stack
              wizard with a soft spot for frontend magic and dazzling UI/UX
              designs. 🧙‍♂️✨ While I'm fluent in both frontend and backend
              sorcery, there's something special about crafting pixel-perfect
              interfaces and bringing designs to life. When I'm not immersed in
              code, I'm diving into the fascinating realms of AI, deep learning,
              and NLP, sprinkling magic into every project. With me, every line
              of code is an adventure, and every project is a journey to the
              stars! 🚀🌟
            </span>
          </div>
          <button className=" button i-button">Hire Me</button>

          <div className="i-icons">
            {/* links to my profiles */}
            {/* <a href=''> */}

            {/* </a> */}
            {/* <img src={Github} alt="" /> */}
            <a
              href="https://github.com/njerimuiruri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/faith-njeri-76892b211/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>

            {/* <img src={LinkedIn} alt="" /> */}
            <img src={Instagram} alt="" />
          </div>
        </div>
        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={faith} alt="" />
          <img
            initial={{ left: "-36%" }}
            whileInView={{ left: "-10%" }}
            transition={{ duration: 2, type: "string" }}
            src={glassesimoji}
            alt=""
          />
          {/* src={glassesimoji} alt=''/> */}
          <div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={{ duration: 2 }} // Assuming you want the same duration as img
            style={{ position: "absolute", top: "-4%", left: "68%" }}
          >
            <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
          </div>

          <div style={{ top: "18rem", left: "0rem" }}>
            <FloatingDiv image={thumbup} tx1="Best Design" txt2="Award" />
          </div>

          {/* blur div */}
          <div
            className="blur"
            style={{ backgroundColor: "rgb(238 210 255" }}
          ></div>
          <div
            className="blur"
            style={{
              background: "#c1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Intro;
