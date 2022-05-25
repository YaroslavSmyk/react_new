import React, { Component } from 'react';

class GoodButton extends Component {
  handleClick(event) {
    console.log(event.target)
   alert('Good job!');
  }

  render() {
    return (
      <button className="fancy-button" 
      onClick={this.handleClick}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
