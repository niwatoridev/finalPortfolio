import React from 'react';
import "./Portfolio.css"
import homeIcon from "../../images/icons/home.png"
import { Link } from "react-router-dom";
import pjContainer from '../PjContainer';


const Portfolio = () => {
  return (

    <div id="bigPapa" class="container">

      <pjContainer>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </pjContainer>




      {/* Footer */}

      <div id="footer" class="row">
        <div className="footerContent">
          <p id="fullName">Esteban Munoz</p>
        </div>
        <div className="footerContent">
          <Link to="/">
            <img src={homeIcon} alt='home-icon' className='homeIcon' />
          </Link>
        </div>
      </div>

      {/* End Footer */}


    </div >

  );
};

export default Portfolio;
