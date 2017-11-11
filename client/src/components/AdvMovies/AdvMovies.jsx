import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import movieimg from './video-camera.png'

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
        zipcode: this.props.zip_code
      }
    }).then((res) => {
      const item = res.data;
      context.setState({
        movieName: item.movieName,
        moviePoster: item.moviePoster,
        cinemaName: item.cinemaName
      });
    });
  }

  render() {
    return (
      <div className="adventure-container" onClick={this.handleClick}>
        <h4>Movies</h4>
        <img src={movieimg} alt="No movie for you" />
        <h3>{this.state.movieName}</h3>
        <h6>{this.state.cinemaName}</h6>
        <img className="images" src={this.state.moviePoster} alt={this.state.name} />
      </div>
    );
  }
}



export default AdvMovies;
