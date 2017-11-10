import React from 'react';
import ReactDOM from 'react-dom';
import AdventureList from './AdventureList.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      adventure: '',
    }

  }

  render () {
    return (
      <div>
        <h1 id="title">TITLE</h1>
        <AdventureList adventure={this.state.adventure} />
      </div>
    )
  }
}


export default App;
