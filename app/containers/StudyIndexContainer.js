import React, { Component }  from 'react';
import StudyTile from "../components/StudyTile";

class StudyIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studies: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/studies')
      .then(response => response.json())
      .then(responseData => {
        this.setState({ studies: [...this.state.studies, ...responseData.studies] })
      })
  }

  render() {
    let studies = this.state.studies.map(study => {
      return(
        <StudyTile
          key={study.id}
          id={study.id}
          title={study.title}
        />
      )
    })

    return(
      <div className="row">
        <div className="small-8 small-centered columns">
          <h2>STUDIES</h2>
          <hr/>
          {studies}
        </div>
      </div>
    )
  }
}

export default StudyIndexContainer;
