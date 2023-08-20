import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";



export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 100,
      backSpeed:60,
      strings: ["Developer", "Software developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/meeee-removebg.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Genevieve Njoku</h1>
          <h3>
            A Frontend <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#works">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
