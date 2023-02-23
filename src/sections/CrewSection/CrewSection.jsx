import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'
import React , { useEffect, useState } from "react";
import Sliders from "../../components/Slider/Sliders";
import { getData } from '../../services/getData'


export default function CrewSection() {

  const [listInfo, setListInfo] = useState([])
  const endpoint = "crew"
  const getCrew = async () => {
    const response = await getData(endpoint);
    setListInfo(response)
}

  useEffect(() => {
    getCrew()
}, [])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return ( 
    <main className="banner">
      <p className="title"> <span className="number">02</span> MEET YOUR CREW</p>
    <Slider {...settings}>
      {
                    listInfo.map((newSlider, index) => (
                        <Sliders
                            role={newSlider.role}
                              bio={newSlider.bio}
                              key={index}
                              image={newSlider.images.png}
                              name={newSlider.name}
                        />
                    ))
                }
    </Slider>
    </main>
  );
}
