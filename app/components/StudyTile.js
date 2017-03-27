import React from 'react';
import { Link } from 'react-router';

const StudyTile = (props) => {
  return(
    <div className="study-tile">
      <p><Link to={`/studies/${props.id}`}>{props.title}</Link></p>
      <hr/>
    </div>
  )
}

export default StudyTile;
