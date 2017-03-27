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
        <div className="header text-center">
          <div id="logo">
            <img src="images/logoletter_72dpi_forweb.png" alt="Citylife Logo"/>
          </div>
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
        {this.props.children}
      </div>
    )
  }
}

export default Dashboard;
