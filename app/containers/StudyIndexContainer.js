import React, { Component }  from 'react';
import data from "../constants/data";
import Study from "../components/Study";

class StudyIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studies: []
    }
  }

  componentDidMount() {
    let studyId = this.props.params.id;
    let currentStudy = data.studies.find((study) =>
      (study.id == studyId)
    )
    this.setState({ study: currentStudy })
  }
  render() {
    return(
      <Study
        key={this.state.study.id}
        id={this.state.study.id}
        title={this.state.study.title}
        subtitle={this.state.study.subtitle}
      />
    )
  }
}

export default StudyIndexContainer;
