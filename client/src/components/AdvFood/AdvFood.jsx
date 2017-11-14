import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import foodImg from './food.png';
import brendan from './brendan.gif'
import $ from 'jquery'


class AdvFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address0: '',
      address1: '',
      image_url: ''
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
        url: '/food',
        data: {
          zipcode: this.props.zip_code
        }
      }).then((res) =>  {
        const item = res.data.businesses[Math.floor(Math.random()*res.data.businesses.length)];
        context.setState({
          name: item.name,
          address0: `${item.location.display_address[0]}`,
          address1: `${item.location.display_address[1]}`,
          image_url: item.image_url
        });
        $('#event').html('').append(`
          <div class="row justify-content-center">
            <div class="col-lg-4 col-lg-offset-2">
              <a href="#"><img class='images' src=${this.state.image_url} alt=${this.state.name} /></a>
            </div>
            <div class="col-lg-5">
              <br><br>
                <h2>${this.state.name}</h2>
                <h4>${this.state.address0}</h4>
                <h4>${this.state.address1}</h4>
              </div>
            </div>
            `)
          });
    }
  }

  render() {
    return (
      <div className="adventure-container" onClick={this.handleClick}>
        <h4>Food</h4>
        <img src={foodImg} alt="No food :("/>
      </div>
    );
  }
}



export default AdvFood;
