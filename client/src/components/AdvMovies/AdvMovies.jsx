import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import movieimg from './video-camera.svg'
import brendan from './brendan.gif'
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
    if (this.props.zip_code === '' || isNaN(this.props.zip_code) || this.props.zip_code.length !== 5) {
      $('#zipcodeAlert').html('').append(`
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <strong>ZOINKS!</strong> Looks like there was something wrong with the zip code. Please double check and try again.
        </div>
      `)
    } else {
      $('#event').html('').append(`
        <div class="row justify-content-center">
          <div class="col-lg-4">
            <img id='brendan' src=${brendan} />
            <br><br><br>
            <h3>Don't worry!</h3>
            <h3><strong>Brendan</strong> is searching for you!</h3>
          </div>
          </div>
          `)
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
  }

  render() {
    return (
      <div className="adventure-container" onClick={this.handleClick}>
        <h4>Movies</h4>
        <img class='logos' src={movieimg} alt="No movie for you" />
      </div>
    );
  }
}



export default AdvMovies;
