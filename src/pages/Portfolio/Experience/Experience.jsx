import React from 'react';
import "./Experience.css"
import sngularLogo from '../../../images/logos/sngularLogo.jpeg'
import fiverrLogo from '../../../images/logos/fiverrLogo.png'
import vibesLogo from '../../../images/logos/vibesLogo.png'
import ggaLogo from '../../../images/logos/ggaLogo.jpeg'
import { formatDistanceToNowStrict } from 'date-fns';

const dateSngular = ('2022-06')
const dateFiverr = ('2022-04')
const dateVibes = ('2020-06')

function obtenerDistancia(dateBegan) {
  const diferenceString = formatDistanceToNowStrict(new Date(dateBegan), {unit:'month'})
  const monthsString = diferenceString.split(' ')[0]
  const monthsNum = parseInt(monthsString)
  const yearsNum = monthsNum / 12
  if (yearsNum < 1) {
    let monthsInInteger = parseFloat(yearsNum)*12+1
    return (monthsInInteger + ' mos')
  } else {
    let yearsInString = yearsNum.toString()
    let yearsArr = yearsInString.split('.')
    let yearsInInteger = yearsArr[0]
    let remainingMonthsInString = '.' + yearsArr[1]
    let remainingMonthsInNumber = (parseInt(parseFloat(remainingMonthsInString)*12))
    if (yearsInInteger === 1 ) {
    let multipleYearsString = yearsInInteger + ' yr ' + remainingMonthsInNumber + ' mos'
    return multipleYearsString
  } else {
    let singleYearString = yearsInInteger + ' yrs ' + remainingMonthsInNumber + ' mos'
    return singleYearString 
  }
  }
}

const Experience = () => {
    return ( 
          <div className="frameContent">
            <h2>Experience</h2>
            <div className="experienceList">
              <div className='experienceEntry'>
                <div className='experienceEntryLogo'>
                  <a className='logoContainer' rel="noreferrer" target='_blank' href="https://www.sngular.com/"><img className='experienceLogo' src={sngularLogo} alt="Sngular Logo"/></a>
                </div>
                <div className='experienceEntryData'>
                    <h3>Front End Developer</h3>
                    <p><a target='_blank' rel="noreferrer" href="https://www.sngular.com/">Sngular <i class="fa-solid fa-link"></i></a><span> · Mexico (Hybrid)</span></p>
                    <p>Jun 2022 - Present · {obtenerDistancia(dateSngular)}</p>
                </div>
              </div>
              <div className='experienceEntry'>
                <div className='experienceEntryLogo'>
                  <a className='logoContainer' target='_blank' rel="noreferrer" href="https://www.fiverr.com/"><img className='experienceLogo' src={fiverrLogo} alt="Fiverr Logo"/></a>
                </div>
                <div className='experienceEntryData'>
                    <h3>Front End Developer</h3>
                    <p><a target='_blank' rel="noreferrer" href="https://www.fiverr.com/">Fiverr <i class="fa-solid fa-link"></i></a><span> · Freelance (Remote)</span></p>
                    <p>Apr 2022 - Present · {obtenerDistancia(dateFiverr)}</p>
                </div>
              </div>
              <div className='experienceEntry'>
                <div className='experienceEntryLogo'>
                  <a className='logoContainer' target='_blank' rel="noreferrer" href="https://www.facebook.com/vibesgg"><img className='experienceLogo' src={vibesLogo} alt="VibesGG Logo"/></a>
                </div>
                <div className='experienceEntryData'>
                    <h3>CEO & Main Dev</h3>
                    <p><a target='_blank' rel="noreferrer" href="https://www.facebook.com/vibesgg">VibesGG <i class="fa-solid fa-link"></i></a><span> · Mexico</span></p>
                    <p>Jun 2020 - Present · {obtenerDistancia(dateVibes)}</p>
                </div>
              </div>
              <div className='experienceEntry'>
                <div className='experienceEntryLogo'>
                  <a className='logoContainer' target='_blank' rel="noreferrer" href="https://ggasolutions.com/"><img className='experienceLogo' src={ggaLogo} alt="gga Logo"/></a>
                </div>
                <div className='experienceEntryData'>
                    <h3>Team Lead</h3>
                    <p><a target='_blank' rel="noreferrer" href="https://ggasolutions.com/">GGA Solutions <i class="fa-solid fa-link"></i></a><span id='ggaLocation'> · Tijuana (Remote)</span></p>
                    <p>Apr 2021 - Mar 2022 · 1 yr 5 mos</p>
                </div>
              </div>
            </div>
          </div>
    );
};

export default Experience;

