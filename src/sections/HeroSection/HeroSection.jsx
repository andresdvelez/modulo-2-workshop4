import React from 'react';
import './style.scss';
import BgImg from '../../assets/home/background-home-desktop.jpg';

function HeroSection() {
    return (
        <>
            <div className="hero">
                <article className="hero__container">
                    <div className="hero__container-description">
                        <span className="hero__container-description-travel">
                            SO, YOU WANT TO TRAVEL TO
                        </span>
                        <span className="hero__container-description-title">
                            SPACE
                        </span>
                        <p className="hero__container-description-paragraph">
                            Let’s face it; if you want to go to space, you might
                            as well genuinely go to outer space and not hover
                            kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world
                            experience!
                        </p>
                    </div>
                    <div className="hero__container-ball">
                        <span className="hero__container-ball-explore">
                            EXPLORE
                        </span>
                    </div>
                </article>
            </div>
        </>
    );
}

export default HeroSection;
