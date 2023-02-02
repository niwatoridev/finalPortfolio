import React from 'react';
import "./Portfolio.css"
import homeIcon from "../../images/icons/home.png"
import { Link } from "react-router-dom";


const Portfolio = () => {
  return (

    <div id="bigPapa" class="container">

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

    </div >

  );
};

export default Portfolio;
