import React, { Component } from 'react';


  class Toggler extends Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: false,
    }
  }

  onButton =() => {
    this.setState({
      counter: !this.state.counter,
    });
  };

  render() {
    return (
      <div className="toggler" onClick={this.onButton}>{this.state.counter? "On": "Off"}</div>
    );
  }
  }
export default Toggler;
