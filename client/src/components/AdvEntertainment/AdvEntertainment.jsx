import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import entertainmentimg from './ferris-wheel.png';
import $ from 'jquery'


class AdvEntertainment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      item_url: '',
      image_url: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const context = this;
    axios({
      method: 'post',
      url: '/entertainment',
      data: {
        zipcode: this.props.zip_code
      }
    }).then((res) =>  {
      const item = res.data.events[Math.floor(Math.random()*res.data.events.length)];
      context.setState({
        name: item.name.text,
        item_url: item.url,
        image_url: item.logo.original.url

      });
      $('#event').html('').append(`
        <div class="row justify-content-center">
          <div class="col-lg-4 col-lg-offset-2">
            <img class='images' src=${this.state.image_url} alt=${this.state.name} />
          </div>
          <div class="col-lg-5">
            <br><br>
            <h2>${this.state.name}</h2>
            <a id='eventLink' href=${this.state.item_url}>Let's Go to the event page</a><br>
          </div>
        </div>
        `)
     });
  }

  render() {
    return (
      <div className="adventure-container" onClick={this.handleClick}>
        <h4>Entertainment</h4>
        <img src={entertainmentimg} alt="no entertainment for you" />
      </div>
    );
  }
}



export default AdvEntertainment;
