import React, { Component } from 'react';
import { Link } from 'react-router';

class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>

        <div className="row show-for-small-only">
          <div className="title-bar" data-responsive-toggle="top-menu">
            <img id="small-logo" src="images/logoletter_72dpi_forweb.png" alt="Citylife Logo" />
            <button className="menu-icon" type="button" data-toggle="top-menu"></button>
            <div className="title-bar-title">Menu</div>
          </div>
          <div className="top-bar" id="top-menu">
            <ul className="vertical menu" data-accordion-menu>
              <li><Link to={`/`}>HOME</Link></li>
              <li>
                <a href="#">STUDIES</a>
                <ul className="menu vertical nested">
                  <li><Link to={`/studies/1`}>FEB STUDY 1</Link></li>
                  <li><Link to={`/studies/2`}>FEB STUDY 2</Link></li>
                </ul>
              </li>
              <li>
                <a href="http://www.citylifeboston.org/">
                  <span>CITYLIFE BOSTON</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row show-for-medium">
          <div className="top-bar">
            <div className="top-bar-left">
              <ul className="dropdown menu" data-dropdown-menu>
                <li><Link to={`/`}>HOME</Link></li>
                <li>
                  <a href="#">STUDIES</a>
                  <ul className="menu vertical">
                    <li><Link to={`/studies/1`} className="vertical-align-middle">MARCH STUDY 1</Link></li>
                    <li><Link to={`/studies/2`} className="vertical-align-middle">MARCH STUDY 2</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="top-bar-right">
              <ul className="menu">
                <li>
                  <a href="http://www.citylifeboston.org/">
                    <img id="large-logo" src="images/logoletter_72dpi_forweb.png" alt="Citylife Logo" />
                    <span>CITYLIFE BOSTON</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Dashboard;
