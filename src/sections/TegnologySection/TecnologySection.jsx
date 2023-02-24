import React, { useEffect, useRef, useState } from "react";
import { getData } from "../../services/getData";
import "./style.scss";

import sectionBg from "../../assets/technology/background-technology-desktop.jpg";
import exampleImg from "../../assets/technology/exampleImg.jpg";
import { validateBtns } from "../../utils/validateBtns";

function TecnologySection() {
  const [technologies, setTechnologies] = useState([]);

  const firstBtnRef = useRef(null);
  const secondBtnRef = useRef(null);
  const thirdBtnRef = useRef(null);

  const [currentImage, setCurrentImage] = useState(exampleImg);
  const [currentTitle, setcurrentTitle] = useState("LAUNCH VEHICLE");
  const [currentDescription, setcurrentDescription] = useState(
    `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`
  );
  const handleClick = (image, title, desc, e) => {
    setCurrentImage(image);
    setcurrentTitle(title);
    setcurrentDescription(desc);

    console.log();

    console.log(e.target.classList);

    validateBtns(e, firstBtnRef, secondBtnRef, thirdBtnRef);
  };
  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await getData("technology");
        setTechnologies(res);
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div
      className="technology"
      style={{ backgroundImage: `url(${sectionBg})` }}
    >
      <div className="technology__header">
        <span className="technology__header-index">03</span>
        <h3 className="technology__header-title">Space launch 101</h3>
      </div>
      <div className="technology__main">
        {technologies.length && (
          <>
            <div className="technology__main-left">
              <div className="technology__main-btns">
                <button
                  ref={firstBtnRef}
                  className="technology__main-btn active"
                  onClick={(e) =>
                    handleClick(
                      `${technologies[0].images.portrait}`,
                      `${technologies[0].name}`,
                      `${technologies[0].description}`,
                      e
                    )
                  }
                >
                  1
                </button>
                <button
                  ref={secondBtnRef}
                  className="technology__main-btn"
                  onClick={(e) =>
                    handleClick(
                      `${technologies[1].images.portrait}`,
                      `${technologies[1].name}`,
                      `${technologies[1].description}`,
                      e
                    )
                  }
                >
                  2
                </button>
                <button
                  ref={thirdBtnRef}
                  className="technology__main-btn"
                  onClick={(e) =>
                    handleClick(
                      `${technologies[2].images.portrait}`,
                      `${technologies[2].name}`,
                      `${technologies[2].description}`,
                      e
                    )
                  }
                >
                  3
                </button>
              </div>

              <div className="technology__main-info">
                <div className="info__header">
                  <p className="info__header-text">THE TERMINOLOGY…</p>
                  <h2 className="info__header-title">{currentTitle}</h2>
                </div>
                <p className="info__body">{currentDescription}</p>
              </div>
            </div>
            <figure className="info__main-info">
              <img src={currentImage} alt="" />
            </figure>
          </>
        )}
      </div>
    </div>
  );
}

export default TecnologySection;
