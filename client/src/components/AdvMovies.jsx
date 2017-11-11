import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class AdvMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: '',
      moviePoster: '',
      cinemaName: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const context = this;
    axios({
      method: 'post',
      url: '/movies',
      data: {
        zipcode: 90045 // NEED TO CHANGE TO GRAB INPUT
      }
    }).then(function(res) {
      const item = res.data;
      context.setState({
        movieName: item.movieName,
        moviePoster: item.moviePoster,
        cinemaName: item.cinemaName
      });
      console.log(item)
    });
  }

  render() {
    return (
      <div className="adventure-container" onClick={this.handleClick}>
        <h4>Movies</h4>
        <h3>{this.state.movieName}</h3>
        <h6>{this.state.cinemaName}</h6>
        <img className="images" src={this.state.moviePoster} alt={this.state.name} />
      </div>
    );
  }
}



export default AdvMovies;
