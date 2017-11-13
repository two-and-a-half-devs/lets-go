import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import movieimg from './video-camera.png'
import $ from 'jquery'

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
      console.log(res.data);
      context.setState({
        movieName: item.movieName,
        moviePoster: item.moviePoster,
        cinemaName: item.cinemaName
      });
      $('#event').html('').append(`
        <div class="row justify-content-center">
          <div class="col-lg-4 col-lg-offset-2">
            <img id='movieimg' class='images' src=${this.state.moviePoster} alt=${this.state.movieName} />
          </div>
          <div class="col-lg-5">
            <br><br>
            <h2>${this.state.movieName}</h2>
            <h4>${this.state.cinemaName}</h4>
          </div>
        </div>
      `)
    });
  }

  render() {
    return (
      <div className="adventure-container" onClick={this.handleClick}>
        <h4>Movies</h4>
        <img src={movieimg} alt="No movie for you" />
      </div>
    );
  }
}



export default AdvMovies;
