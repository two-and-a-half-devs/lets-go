import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Adventure from './Adventure.jsx';

function AdventureList(props) {
  return (
    <div>
      <div id="adventure-list" >
        <div id="left" >
          <Adventure adventure={props.adventure} />
          <img src="https://capstoneclimbing.com/wp-content/uploads/2014/09/adventure.png" />
        </div>
        <div id="left-middle" >
          <Adventure adventure={props.adventure}/>
        </div>
        <div id="middle" >
          <Adventure adventure={props.adventure}/>
        </div>
        <div id="right-middle" >
          <Adventure adventure={props.adventure}/>
        </div>
        <div id="right" >
          <Adventure adventure={props.adventure}/>
        </div>
      </div>
  </div>
  );
}

export default AdventureList;
