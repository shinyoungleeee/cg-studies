import React from 'react';
import { Link } from 'react-router';

const Letter = props => {
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

export default Letter;

// <ul className="dropdown menu" data-dropdown-menu>
//   <li><Link to={`/`}>HOME</Link></li>
//   <li>
//     <a href="#">STUDIES</a>
//     <ul className="menu vertical">
//       <li><Link to={`/studies/1`}>MARCH STUDY 1</Link></li>
//       <li><Link to={`/studies/2`}>MARCH STUDY 2</Link></li>
//     </ul>
//   </li>
// </ul>
