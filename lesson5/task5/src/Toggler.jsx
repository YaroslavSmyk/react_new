import React, { Component } from 'react';


  class Toggler extends Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 'Off',
    }
  }

  onButton =() => {
    this.setState({
      counter: "On",
    });
  };

  render() {
    return (
      <div className="toggler" onClick={this.onButton}>{this.state.counter}</div>
    );
  }
  }
export default Toggler;
