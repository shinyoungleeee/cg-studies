import React, { Component } from 'react';
import { Link } from 'react-router';

class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      menu: "hidden"
    }

    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  handleMenuClick(event) {
    if (this.state.menu === "hidden") {
      this.setState({ menu: "" })
    } else {
      this.setState({ menu: "hidden" })
    }
  }

  render() {
    return(
      <div>
        <div>
          <div className="show-for-small-only mobile-menu" onClick={this.handleMenuClick}>
            <img id="small-logo" src="images/logoletter_72dpi_forweb.png" alt="citylife logo" />
            <h2>M E N U</h2>
          </div>
          <div className={"small-navigation " + this.state.menu}>
            <ul>
              <li><Link to={`/`}>HOME</Link></li>
              <li><Link to={`/studies`}>STUDIES</Link></li>
              <li><a href="citylifeboston.org">CITYLIFE BOSTON</a></li>
            </ul>
          </div>

          <div className="show-for-medium large-navigation">
            <div className="large-nav-left">
              <Link to={`/`}>HOME</Link>
              <Link to={`/studies`}>STUDIES</Link>
            </div>
            <div className="large-nav-middle">
              <h1>CITYLIFE CG STUDIES</h1>
            </div>
            <div className="large-nav-right">
              <a href="citylifeboston.org">CITYLIFE BOSTON</a>
            </div>
          </div>
        </div>
        <div className="studies">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Dashboard;
