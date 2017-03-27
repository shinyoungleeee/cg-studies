import React from 'react';
import { Link } from 'react-router';

const Letter = props => {
  return(
    <div>
      <div className="header-wrapper">
        <div className="row">
          <div id="logo" className="small-10 small-centered large-3 large-centered columns">
            <img src="images/logoletter_72dpi_forweb.png" alt="Citylife Logo"/>
          </div>
        </div>
        <div className="row">
          <div id="header" className="small-centered columns">
            <h1>CITYLIFE CG STUDIES</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="small-12 small-centered large-8 large-centered columns">
          <h1>Dear Community Group Member,</h1>
          <p>Just recently, I passed out. I fainted. I lost consciousness and dropped to the floor. I was walking around my house and, the next thing I knew, I was waking up trying to figure out where I was. Now, before you get too freaked out, know that I’m ok. There is nothing seriously wrong with my health. Thank God!</p>
          <p>The thing that weirded me out the most was that I have recently been a bit healthier than I’ve ever been in my adult life. Lately, I’ve been on a mission to get my act together. God has been teaching me that I have to be a steward of the body he’s given me if I want to bring him glory and fully enjoy the life with which he’s blessed me.</p>
          <p>So you can imagine my surprise when I woke up from my fainting spell. “What in the world is going on!?” I thought. Here’s what was going on:</p>
          <p><em>In my pursuit of physical health, I let some of the foundational pieces of my health slide.</em></p>
          <p>In an effort to drop some pounds and get healthier, I actually ended up setting aside some of the necessary ingredients that are foundational to all healthy diets. Think veggies and all the good stuff that they bring into our lives.</p>
          <p>Why do I tell you all this? Because I want you to know that it’s possible for your CG to look like a thriving community, to be an enjoyable group of people with which to spend your time, even to be a place where people are loved deeply and challenged to grow in the faith, and yet lack some of the basic spiritual nutrition that is necessary for a full, healthy communal life.</p>
          <p>If you’ve been at Citylife for any length of time, you know that we often use the language of “gospel” and “good news.” Perhaps you hear it so much that you’ve started to think “Oh, I’ve already got that down.” Let me speak from experience: it is possible to <em>know</em> a heck of a lot about nutrition and yet fail to live a nutritious life. In the same way, it is possible to <em>know</em> a lot about the gospel and fail to live a life that is based upon and shaped by it.</p>
          <p>These two studies are designed to provide a “gospel check-up.” They’re designed to help you ask and answer the question: “Do I have the foundational spiritual nutrition I need to live a healthy, sustainable life of faith?” “Is the gospel at the core of my spiritual life?”</p>
          <p>Whatever your answer may be to those questions, my hope is that these two studies will prove helpful as you “self-diagnose” in the context of community. May your conversations bring you closer to Jesus—the source and sustainer of our spiritual life and health.</p>
          <p>In and through him,</p>
          <p>Justin Ruddy</p>
        </div>
      </div>
    </div>
  )
}

export default Letter;

// <ul className="dropdown menu" data-dropdown-menu>
//   <li><Link to={`/`}>HOME</Link></li>
//   <li>
//     <a href="#">STUDIES</a>
//     <ul className="menu vertical">
//       <li><Link to={`/studies/1`}>MARCH STUDY 1</Link></li>
//       <li><Link to={`/studies/2`}>MARCH STUDY 2</Link></li>
//     </ul>
//   </li>
// </ul>
