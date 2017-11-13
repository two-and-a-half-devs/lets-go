import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import foodImg from './food.png';
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
    console.log('Zip code entered: ', this.props.zip_code)
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
            <img class='images' src=${this.state.image_url} alt=${this.state.name} />
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

  render() {
    return (
      <div className="adventure-container" onClick={this.handleClick}>
        <h4>Food</h4>
        <img src={foodImg} alt="No food :(" />
      </div>
    );
  }
}



export default AdvFood;
