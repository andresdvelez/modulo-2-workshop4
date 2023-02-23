import React from "react";
import './style.scss'

function Sliders({ role, bio, image, name, id}) {


return <section className="containerSlider">
        <div className="containerSlider__info">
            <span className="containerSlider__info__role">{role}</span>
            <span className="containerSlider__info__name">{name}</span>
            <p className="containerSlider__info__bio">{bio}</p>
        </div>
        <div className="containerSlider__img">
            <img  className="img" src={image} image alt="" />
        </div>
        
</section>;
}

export default Sliders;
