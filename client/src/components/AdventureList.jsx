import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AdvFood from './AdvFood/AdvFood.jsx';
import AdvMovies from './AdvMovies/AdvMovies.jsx';
import AdvEntertainment from './AdvEntertainment/AdvEntertainment.jsx';
import AdvActive from './AdvActive/AdvActive.jsx';
import AdvRandom from './AdvRandom/AdvRandom.jsx';

class AdventureList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip_code: ''
    }
    this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
  }

  handleZipCodeChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({[name]: value});
  }

  render() {
    return (<div>
      <div className="row justify-content-center">
        <div className="col-sm-2 col-sm-offset-5">
        <form>
          <input
          id="zipcode"
          className="form-control justify-content-center"
          name="zip_code"
          type="text"
          value={this.state.zip_code}
          placeholder="Zip Code"
          maxLength="5"
          pattern="[0-9]{5}"
          onChange={this.handleZipCodeChange} />
          </form>
          <br></br>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-2 col-sm-offset-1">
          <AdvFood zip_code={this.state.zip_code}/>
        </div>
        <div className="col-sm-2">
          <AdvMovies zip_code={this.state.zip_code}/>
        </div>
        <div className="col-sm-2">
          <AdvEntertainment zip_code={this.state.zip_code}/>
        </div>
        <div className="col-sm-2">
          <AdvActive zip_code={this.state.zip_code}/>
        </div>
        <div className="col-sm-2">
          <AdvRandom zip_code={this.state.zip_code}/>
        </div>
      </div>
    </div>);
  }
}

export default AdventureList;
