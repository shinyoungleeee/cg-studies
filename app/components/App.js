import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import Dashboard from './Dashboard';
import Letter from './Letter';
import StudyIndexContainer from '../containers/StudyIndexContainer';
import StudyShowContainer from '../containers/StudyShowContainer';
import Intro from '../components/Intro'
import EntryContainer from '../containers/EntryContainer'

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
          <Route path='/studies/:studyId' component={StudyShowContainer}>
            <IndexRoute component={Intro} />
            <Route path='/studies/:studyId/:entryId' component={EntryContainer} />
          </Route>
        </Route>
      </Router>
    )
  }
}

export default App;
