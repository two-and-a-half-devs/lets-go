import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import entertainmentimg from './ferris-wheel.png';

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
    });

  }

  render() {
    return (
      <div className="adventure-container" onClick={this.handleClick}>
        <h4>Entertainment</h4>
        <img src={entertainmentimg} alt="no entertainment for you" />
        <h3>{this.state.name}</h3>
        <h6>{this.state.address0}</h6>
        <h6>{this.state.address1}</h6>
        <img className="images" src={this.state.image_url} alt={this.state.name} />
      </div>
    );
  }
}



export default AdvEntertainment;
