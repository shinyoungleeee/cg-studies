import React, { Component }  from 'react';
import Entry from '../components/Entry'

class EntryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <Entry
        key={this.props.params.entryId}
        studyId={this.props.params.studyId}
        entryId={this.props.params.entryId}
      />
    )
  }
}

export default EntryContainer;
