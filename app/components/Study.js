import React from 'react';
import { Link } from 'react-router';

const Study = props => {
  return(
    <div className="row">
      <div className="small-12 small-centered large-8 large-centered columns">
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <p>In order for all of our Community Groups to be on the same page—aiming toward the same goal—we’re going to take the next few months to review the foundational stuff that animates us. As a group, walk through these three questions about church. Feel free to offer your own thoughts, but then discuss the answers that have been printed here:
        <br/>
        <br/><strong><em>Why</em></strong>, fundamentally, does the church exist?
        <br/>Because God transforms human beings through the news about Jesus (i.e. the gospel).
        <br/>
        <br/>
        <br/><strong><em>How</em></strong> does Citylife live out this “Why”?
        <br/>Together, we shape our lives to display the life-transforming news about Jesus.
        <br/>
        <br/>
        <br/><strong><em>What</em></strong> does this end up looking like?
        <br/>Mission! When, together, we shape our lives to display the life-transforming news about Jesus, we end up becoming “a gospel-shaped community for the city.”
        <br/>
        <br/>This is Citylife Church’s “Macro” Mission: “to be a gospel-shaped community for the city.”
        <br/>Every Community Group mirrors this on a “Micro” level...</p>
      </div>
    </div>
  )
}

export default Study;
