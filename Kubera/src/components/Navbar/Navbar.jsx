import React from 'react'
import { Link } from "react-scroll";
import './navbar.css'
function Home() {
  return (
    <div className="container" >
        <div className="header">
          <div className="navbar">
            <div className="logo">Kubera</div>

            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <span>Home</span>
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <span>About Us</span>
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <span>Services</span>
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home