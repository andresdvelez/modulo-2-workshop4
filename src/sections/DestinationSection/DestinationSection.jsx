import React from "react";
import DestinationNavbar from "../../components/DestinationNavbar/DestinationNavbar";
import "./style.scss";

function DestinationSection() {
  return (
    <>
      <section className="destinatons">
        <h2 className="title">
          <span className="number">01</span>Pick your destination
        </h2>
        <article className="destinationNavbar">
          <DestinationNavbar />
        </article>
      </section>
    </>
  );
}

export default DestinationSection;
