import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Adventure from './Adventure.jsx';
import AdvFood from './AdvFood.jsx';
import AdvMovies from './AdvMovies.jsx';
import AdvEntertainment from './AdvEntertainment.jsx';
import AdvActive from './AdvActive.jsx';


function AdventureList(props) {
  return (
    <div>
      <div id="adventure-list" >
        <div id="left" >
          <AdvFood adventure={props.adventure} />
        </div>
        <div id="left-middle" >
          <AdvMovies adventure={props.adventure}/>
        </div>
        <div id="middle" >
          <AdvEntertainment adventure={props.adventure}/>
        </div>
        <div id="right-middle" >
          <AdvActive adventure={props.adventure}/>
        </div>
        <div id="right" >
          <Adventure adventure={props.adventure}/>
        </div>
      </div>
  </div>
  );
}

export default AdventureList;
