import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activity: [],
    }

  }

  render () {
    return (
      <div>
        <h1>LETS GO!!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
