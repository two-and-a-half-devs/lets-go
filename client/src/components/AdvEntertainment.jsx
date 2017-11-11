import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


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
        zipcode: 90045 // NEED TO CHANGE
      }
    }).then(function(res) {
      const item = res.data.events[Math.floor(Math.random()*res.data.events.length)];
      console.log(item.logo.original.url)
      context.setState({
        name: item.name.text,
        item_url: item.url,
        image_url: item.logo.original.url

      });
      console.log('HELLO')
      //item.logo.original.url, item.name.text,
      //item.url, item.start.local
      //convert start.local to readible thing
    });

  }

  render() {
    return (
      <div className="adventure-container" onClick={this.handleClick}>
        <h4>Entertainment</h4>
        <h3>{this.state.name}</h3>
        <h6>{this.state.address0}</h6>
        <h6>{this.state.address1}</h6>
        <img className="images" src={this.state.image_url} alt={this.state.name} />
      </div>
    );
  }
}



export default AdvEntertainment;
