import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AdvFood from './AdvFood/AdvFood.jsx';
import AdvMovies from './AdvMovies/AdvMovies.jsx';
import AdvEntertainment from './AdvEntertainment/AdvEntertainment.jsx';
import AdvActive from './AdvActive/AdvActive.jsx';
import AdvRandom from './AdvRandom/AdvRandom.jsx';


function AdventureList(props) {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-sm-2 col-sm-offset-5">
          <input className="form-control justify-content-center" type="text" placeholder="Zip Code"></input>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-2 col-sm-offset-1">
          <AdvFood adventure={props.adventure} />
        </div>
        <div className="col-sm-2">
          <AdvMovies adventure={props.adventure} />
        </div>
        <div className="col-sm-2">
          <AdvEntertainment adventure={props.adventure} />
        </div>
        <div className="col-sm-2">
          <AdvActive adventure={props.adventure} />
        </div>
        <div className="col-sm-2">
          <AdvRandom adventure={props.adventure} />
        </div>
      </div>
  </div>
  );
}

export default AdventureList;
