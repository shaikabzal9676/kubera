import React from "react";
import "./about.css";
import Pulse from "react-reveal/Pulse";
function About() {
  return (
    <div id="about" className="about">
      <Pulse>
        <div className="about-img">
          <img
            src="https://t4.ftcdn.net/jpg/05/06/80/77/360_F_506807709_dVXx2UkBR0EHTAuBl1jFBi9mQs43NK8a.jpg"
            alt=""
          />
        </div>
        <div className="about-content">
          <span>KUBERA DIGITAL</span>
          <h1>ONE STOP DIGITAL SOLUTION</h1>
          <p>
            {" "}
            If you are looking for the best advertising agency in Bangalore, get
            in touch with us now to experience the full range of
            technology-driven developments. Logo Design | Corporate Design |
            Packaging and Label Design | Website Design | Web Development |
            Video Animation | Digital Marketing | SEO | Content Writing
          </p>
        </div>
      </Pulse>
    </div>
  );
}

export default About;
