import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import Dashboard from './Dashboard';
import Letter from './Letter';

import StudyIndexContainer from '../containers/StudyIndexContainer';
import StudyShowContainer from '../containers/StudyShowContainer';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Letter} />
        <Route path="/studies" component={Dashboard}>
          <IndexRoute component={StudyIndexContainer} />
          <Route path='/studies/:id' component={StudyShowContainer} />
        </Route>
      </Router>
    )
  }
}

export default App;
