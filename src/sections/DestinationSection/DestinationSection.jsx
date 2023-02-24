import React from "react";
import DestinationNavbar from "../../components/DestinationNavbar/DestinationNavbar";
import "./style.scss";

function DestinationSection() {
    return (
        <>
            <section className="destinatons">
                <h2 className="title__destinations">
                    <span className="number__destitations">01</span>Pick your
                    destination
                </h2>
                <article className="destinationNavbar">
                    <DestinationNavbar />
                </article>
            </section>
        </>
    );
}

export default DestinationSection;
