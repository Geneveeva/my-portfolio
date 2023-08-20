import { useState } from "react";
import "./works.scss";
// import "../assets";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "Design",
      img: " ./assets/five.png",
      linkImg: "https://network-events-react.vercel.app/",
    },

    {
      id: "2",
      title: "Web Design",
      img: " ./assets/One.png",
      linkImg: "https://dynamic-froyo-b6e9a6.netlify.app/",
    },
    {
      id: "3",
      title: "Facebook",
      img: " ./assets/Two.png",
      linkImg: "https://dazzling-babka-2bf9f6.netlify.app/",
    },
    {
      id: "4",
      title: "Google Search",
      img: "/assets/Three.png",
      linkImg: "https://unrivaled-lolly-cbeacf.netlify.app/",
    },

    {
      id: "5",
      title: "Movies",
      img: "/assets/Four.png",
      linkImg: "https://clinquant-youtiao-2bc60d.netlify.app/",
    },
  ];

  const handleClick = (way, out) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  const handleImageClick = (linkImg) => {
    window.location.href = linkImg;
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                  </div>
                  <h2>{d.title}</h2>
                  <span>Go to Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt="Click me"
                  onClick={() => handleImageClick(d.linkImg)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
