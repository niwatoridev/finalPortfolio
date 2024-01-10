import React from 'react';
import "./Portfolio.css"
import homeIcon from "../../images/icons/home.png"
import { Link } from "react-router-dom";
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Widgets from './Widgets/Widgets';


const Portfolio = () => {
  return (
    <div id="mainDiv">
      <div id='portfolio'>
          <div className='frameExperience'>
            <Experience></Experience>
          </div>
          <div className='frame'>
              <Projects></Projects>
          </div>
          <div className='frame'>
              <Widgets></Widgets>
          </div>
      </div>
      <div id="footer">
        <div className="footerContent">
          <p id="fullName">Section Under Construction! <span><i class="fa-solid fa-person-digging"></i></span></p>
        </div>
        <div className="footerContent">
          <Link to="/">
            <img src={homeIcon} alt='home-icon' className='homeIcon' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;



