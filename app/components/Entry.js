import React from 'react';
import { Link } from 'react-router';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: {
        id: "",
        title: "",
        body: ""
      }
    }
  }

  componentDidMount() {
    let studyId = this.props.studyId;
    let entryId = this.props.entryId;
    fetch(`/api/v1/studies/${studyId}/${entryId}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ entry: responseData })
      })
  }

  render() {
    let body = this.state.entry.body.split(/(?:\r\n|\r|\n)/g)
    let bodyHTML = body.map((line) => {
      return(
        <p>{line}<br/></p>
      )
    })

    return(
      <div className="row">
        <div className="small-12 small-centered columns">
          <h3>{this.state.entry.title}</h3>
          {bodyHTML}
        </div>
      </div>
    )
  }
}

export default Entry;
