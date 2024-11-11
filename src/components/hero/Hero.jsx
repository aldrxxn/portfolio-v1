// import React from "react"
import "./hero.scss";
import WaterDropGrid from "./WaterDropGrid";

const Hero = () => {
  return (
    <>
      {/* //fragment */}
      <div className="waterdrop-grid">
        {/* <WaterDropGrid/>  */}
        {/* <Testhero/> */}
      </div>

      <div className="hero">
        <div className="wrapperHero">
          <div className="textContainer">
            <h1>
              Hey, i'm Drian<span className="green-text">.</span>
            </h1>
            <h2>
              i'm a <span className="green-text2">Full Stack Developer</span>
              {/* i'm a <span className="green-text2">[Maintenance]</span> */}
            </h2>
            <span className="description">
              Also an undergraduate student pursuing a degree in Informatics
              Engineering, <br />
              my passion for technology has driven me to explore variousfacets
              of the field (incase you've got an empty canvas layin' around 🎨).{" "}
              <br />
              Let's connect!
            </span>
            {/* <div className="contact"> */}
            {/* <button>Contact Me</button> */}
            {/* </div> */}
            <div className="kontak">
              <a href="mailto:andriantambunan2752@gmail.com" target="blank">
                Contact Me
              </a>
            </div>
          </div>
          {/* <div className="kontak">
                <button>Contact Me</button>
                </div> */}
        </div>
      </div>
      {/* <div className="kontak">
    <button>Contact Me</button>
    </div> */}
    </>
  );
};

export default Hero;
