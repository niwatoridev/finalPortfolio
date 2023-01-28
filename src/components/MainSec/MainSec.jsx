import React from "react";
import "./MainSec.css"
import { Link } from "react-router-dom";
import linkedinIcon from "../../images/icons/linkedin.png"
import githubIcon from "../../images/icons/github-sign.png"
import instagramIcon from "../../images/icons/instagram.png"
import portfolioIcon from "../../images/icons/portfolio.png"
import infoIcon from "../../images/icons/id-card.png"


const MainSec = () => {
    return (
        <div className="main-Sec">
            <div className="main-content">
                <div class="container-fluid text-center">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md col-lg col-xl">
                            <a href="https://www.linkedin.com/in/esmunozdev/" target="_blank" rel="noreferrer"><img src={linkedinIcon} alt="linkedin-icon" className="icon"></img></a>                </div>
                        <div class="col-12 col-sm-12 col-md col-lg col-xl">
                            <a href="https://github.com/niwatoridev" target="_blank" rel="noreferrer"><img src={githubIcon} alt="git-icon" className="icon"></img></a>
                        </div>
                        <div class="col-12 col-sm-12 col-md col-lg col-xl">
                            <a href="https://www.instagram.com/_esmunoz/" target="_blank" rel="noreferrer"><img src={instagramIcon} alt="instagram-icon" className="icon"></img></a>
                        </div>
                        <div class="col-12 col-sm-12 col-md col-lg col-xl">
                            <Link to="/info"><img src={infoIcon} alt="info-icon" className="icon" /></Link>
                        </div>
                        {/* <div class="col-12 col-sm-12 col-md col-lg col-xl">
                            <Link to="/portfolio"><img src={portfolioIcon} alt="portfolio-icon" className="icon" /></Link>
                        </div> */}
                    </div>
                </div>
            </div>

        </div>

    );
};

export default MainSec;