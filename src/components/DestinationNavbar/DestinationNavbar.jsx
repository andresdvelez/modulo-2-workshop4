import React, { useEffect, useState } from "react";
import { getData } from "../../services/getData";
import "./style.scss";

const DestinationNavbar = () => {
  const [planets, setPlanets] = useState([]);

  const [currentImage, setCurrentImage] = useState(
    " https://i.ibb.co/gPmvZwv/image-moon.png"
  );

  const [currentTitle, setcurrentTitle] = useState("Moon");
  const [currentDescription, setcurrentDescription] = useState(
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
  );
  const [currentDistance, setcurrentDistance] = useState("384,400 km");
  const [currentTravel, setcurrentTravel] = useState("3 days");

  const handleClick = (image, title, description, distance, travel) => {
    setCurrentImage(image);
    setcurrentTitle(title);
    setcurrentDescription(description);
    setcurrentTravel(travel);
    setcurrentDistance(distance);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData("destinations");
      setPlanets(res);
    };

    fetchData();
  }, []);

  return (
    <>
      <article className="destination__container">
        <figure className="destination_image">
          <img src={`${currentImage}`} alt="" />
        </figure>
        <article className="description__container">
          <nav className="nav__planets">
            <button
              onClick={() =>
                handleClick(
                  `${planets[0].images.png}`,
                  `${planets[0].name}`,
                  `${planets[0].description}`,
                  `${planets[0].distance}`,
                  `${planets[0].travel}`
                )
              }
            >
              Moon
            </button>
            <button
              onClick={() =>
                handleClick(
                  `${planets[1].images.png}`,
                  `${planets[1].name}`,
                  `${planets[1].description}`,
                  `${planets[1].distance}`,
                  `${planets[1].travel}`
                )
              }
            >
              Mars
            </button>
            <button
              onClick={() =>
                handleClick(
                  `${planets[2].images.png}`,
                  `${planets[2].name}`,
                  `${planets[2].description}`,
                  `${planets[2].distance}`,
                  `${planets[2].travel}`
                )
              }
            >
              Europa
            </button>
            <button
              onClick={() =>
                handleClick(
                  `${planets[3].images.png}`,
                  `${planets[3].name}`,
                  `${planets[3].description}`,
                  `${planets[3].distance}`,
                  `${planets[3].travel}`
                )
              }
            >
              Titan
            </button>
          </nav>
          <span
            className="description__title"
            /* ref={titleRef} */
          >{`${currentTitle}`}</span>

          <p className="description__planet" /*  ref={descriptionRef} */>
            {`${currentDescription}`}
          </p>
          <div className="description__disandtravel">
            <div className="description__distance">
              <span>AVG.DISTANCE</span>
              <p /* ref={distanceRef} */>{`${currentDistance}`}</p>
            </div>
            <div className="description__travel">
              <span>Est. travel time</span>
              <p /* ref={travelRef} */>{`${currentTravel}`}</p>
            </div>
          </div>
        </article>
      </article>
    </>
  );
};

export default DestinationNavbar;

// {planets.map((planet, index) => (
//     <article className="destination__container" key={index}>
//         <figure className="destination_image">
//             <img className="img" src={planet.images.png} alt="" />
//         </figure>
//         <div className="destinations__navar">
//             <h1>{planet.name}</h1>
//         </div>
//     </article>
// ))}
