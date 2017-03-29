import React from 'react';
import { Link } from 'react-router';

const LandingPage = props => {
  return(
    <div className="header-wrapper">
      <div id="logo">
        <img src="images/logoletter_72dpi_forweb.png" alt="Citylife Logo"/>
      </div>
      <div id="header">
        <h1>CITYLIFE CG STUDIES</h1>
      </div>
      <div className="studies-button">
        <Link to={`/studies`}>
          <button className="button">CONTINUE TO STUDIES</button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage;
