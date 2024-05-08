import React from "react";
import "./service.css";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

function Service() {
  return (
    <div id="services" className="service-container">

     

        <div className="Img">
      <Bounce>
          <img
            className="service-Img"
            src="https://www.big-red-digital.com/images/blogimages/social-media-networks.jpg"
            alt=""
          />
        
      </Bounce>

      <Fade right>
        <div className="service-detail">
          <h1>Social Media Marketing</h1>
          <ul className="ul-list">
            <li>Business Profile Creation</li>
            <li>Instagram Ads</li>
            <li>Audience Search</li>
          </ul>
        </div>
      </Fade>

      </div>


        <div className="Img">
      <Bounce>
          <img
            className="service-Img"
src="https://websitedesignkingston.com/wp-content/uploads/2021/04/Blog-branding.png"          />
      </Bounce>

      <Fade right>
        <div className="service-detail">
          <h1>Branding</h1>
          <ul className="ul-list">
            <li>Logo Creation</li>
            <li>Instagram Ads</li>
            <li>Brand Extension</li>
          </ul>
        </div>
      </Fade>

        </div>

        <div className="Img">
      <Bounce>
          <img
            className="service-Img"
src="https://media.geeksforgeeks.org/wp-content/uploads/20231017114110/WEB-DESIGN-copy.webp"            alt=""
          />
      </Bounce>

      <Fade right>
        <div className="service-detail">
          <h1>Social Media Marketing</h1>
          <ul className="ul-list">
            <li>Business Profile Creation</li>
            <li>Instagram Ads</li>
            <li>Audience Search</li>
          </ul>
        </div>
      </Fade>


        </div>

   


    </div>
  );
}

export default Service;
