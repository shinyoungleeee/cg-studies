import React from 'react';
import { Link } from 'react-router';

const Study = (props) => {
  let entries = props.entries.map((entry) => {
    return(
      <li><Link to={`/studies/${props.id}/${entry.id}`}>Entry #{entry.id}</Link></li>
    )
  })

  return(
    <div className="row">
      <div className="small-12 small-centered columns">
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <ul>
          {entries}
        </ul>
      </div>
    </div>
  )
}

export default Study;
