import React, { Component }  from 'react';
import Study from '../components/Study';

class StudyShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      study: {
        id: "",
        title: "",
        subtitle: "",
        entries: []
      }
    }
  }

  componentDidMount() {
    let studyId = this.props.params.studyId;
    fetch(`/api/v1/studies/${studyId}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ study: responseData })
      })
  }
  render() {
    return(
      <div>
        <Study
          key={this.state.study.id}
          id={this.state.study.id}
          title={this.state.study.title}
          subtitle={this.state.study.subtitle}
          entries={this.state.study.entries}
        />
        {this.props.children}
      </div>
    )
  }
}

export default StudyShowContainer;
