import React from "react";
import "./style.scss";
import BgImg from "../../assets/home/background-home-desktop.jpg";

function HeroSection() {
  return (
    <div className="hero">
      <img className="hero__bg" src={BgImg} alt="" />
    </div>
  );
}

export default HeroSection;
