import React from "react";
import "./style.scss";

import sectionBg from "../../assets/technology/background-technology-desktop.jpg";
import exampleImg from "../../assets/destination/image-europa.webp";

function TecnologySection() {
  return (
    <div className="technology">
      <img
        className="technology__bg"
        src={sectionBg}
        alt=""
        draggable="false"
      />
      <div className="technology__header">
        <span className="technology__header-index">03</span>
        <h3 className="technology__header-title">Space launch 101</h3>
      </div>
      <div className="technology__main">
        <div className="technology__main-btns">
          <button className="technology__main-btns">1</button>
          <button className="technology__main-btns">2</button>
          <button className="technology__main-btns">3</button>
        </div>
        <div className="technology__main-info">
          <div className="technology__header">
            <p className="technology__header-text">THE TERMINOLOGY…</p>
            <h2 className="technology__header-title">LAUNCH VEHICLE</h2>
          </div>
          <p className="technology__body">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
          <figure className="technology__main-info">
            <img src={exampleImg} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default TecnologySection;
