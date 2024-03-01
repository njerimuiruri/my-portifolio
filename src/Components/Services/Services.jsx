import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
// import Card from "../"
import Card from "../Card/Card";
import Resume from "./resume.pdf";

function Services() {
  return (
    <>
      <div className="services">
        {/* left side */}

        <div className="awesome">
          <span>My Awesome</span>
          <span>service</span>
          <span>
            I offer a variety of tech services, from web/ Appdevelopment to
            UI/UX design.
            <br />
            Let's bring your ideas to life together!" 🚀💻✨
          </span>
          {/* download cv */}
          <a href={Resume} download>
            <button className="button s-button">Download CV </button>
          </a>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        {/* right side */}
        <div className="cards">
          <div style={{ left: "14rem" }}>
            <Card
              emoji={HeartEmoji}
              heading={"UI/UX"}
              detail={"Figma, Canvas"}
            />
          </div>
          {/* second card */}
          <div style={{ top: "12rem", left: "-4rem" }}>
            <Card
              emoji={Glasses}
              heading={"Languages "}
              detail={
                "Html,CSS ,Javascript frameworks(React.Js, React-native, node.js), PHP frameworks(Laravel 10, code Igniter 4)"
              }
            />
          </div>
          {/* third card */}
          <div style={{ top: "19rem", left: "12rem" }}>
            <Card
              emoji={Humble}
              heading={"Database"}
              detail={"Mysql, Mongodb(NoSql)"}
            />
          </div>
          <div
            className="blur s-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Services;
