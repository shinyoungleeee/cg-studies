import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import Dashboard from './Dashboard';
import Letter from './Letter';
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
        <Route path="/" component={Dashboard}>
          <IndexRoute component={Letter} />
          <Route path='studies/:id' component={StudyShowContainer} />
        </Route>
      </Router>
    )
  }
}

export default App;
