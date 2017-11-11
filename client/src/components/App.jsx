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
        <AdventureList adventure={this.state.adventure} />
      </div>
    )
  }
}


export default App;
