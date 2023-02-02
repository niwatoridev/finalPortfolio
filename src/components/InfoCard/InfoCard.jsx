import React from "react";
import "./InfoCard.css"
import profPic from "../../images/Circular.png"
import homeIcon from "../../images/icons/home.png"
import { Link } from "react-router-dom";


const InfoCard = () => {
    return (
        <div id="bigPapa" class='container'>
            <div id="content" class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 align-self-center col-xl">
                    <div id="leftText" class="row text-right">
                        <h2 class="col-12">Front-end Passionated</h2>
                        <h2 class="col-12">Digital Native</h2>
                        <h2 class="col-12">He/Him</h2>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl mb-3 mt-1">
                    <div id="picContainer" class="row">
                        <img src={profPic} alt="prof-pic" id="profPic" />
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl align-self-center">
                    <div id="rightText" class="row">
                        <h2 class="col-12"> Mexican</h2>
                        <h2 class="col-12">+52 2223900810</h2>
                        <h2 class="col-12">esmunozdev@gmail.com</h2>
                    </div>

                </div>
            </div >
            <div className="footer" class="row">
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

export default InfoCard;
