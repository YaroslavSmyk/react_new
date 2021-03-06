import React, { Component } from 'react';
import Clock from './Clock.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
    this.toggele = this.toggele.bind(this);
  }

  toggele() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggele}>Toggele</button>
        <div >{this.state.visible && <Clock location="London" offset={0} />}</div>
        <div>{this.state.visible && <Clock location="Kyiv" offset={2} />}</div>
        <div>{this.state.visible && <Clock location="New York" offset={-5}/>}</div>


      </div>
    );
  }
}

export default App;