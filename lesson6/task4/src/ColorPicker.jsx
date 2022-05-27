import React, { Component } from 'react';

const coral = 'coral';
const aqua = 'aqua';
const bisque = 'bisque';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: '',
    };
  }

  changeColor = (colorName) => {
    this.setState({
      counter: colorName,
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.counter}</div>
        <div>
          <button style={{backgroundColor: coral}} onMouseOver={() => this.changeColor(coral)} onMouseOut={() => this.changeColor('')} className="picker__button picker__button_coral"></button>
          <button style={{backgroundColor: aqua}} onMouseOver={() => this.changeColor(aqua)} onMouseOut={() => this.changeColor('')} className="picker__button picker__button_aqua"></button>
          <button style={{backgroundColor: bisque}} onMouseOver={() => this.changeColor(bisque)} onMouseOut={() => this.changeColor('')} className="picker__button picker__button_bisque"></button>
        </div>
      </div>
    );
  }
}
export default ColorPicker;

// onMouseOver={} onMouseOut={}