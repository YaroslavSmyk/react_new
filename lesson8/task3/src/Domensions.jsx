import React, { Component } from 'react';

class Domensions extends Component {
  state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResiza);

    const { innerWidth, innerHeight } = window;
    this.setDimension(innerWidth, innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResiza);
  }

  onResiza = (e) => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimension(innerWidth, innerHeight);
  };

  setDimension = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${innerWidth} x ${innerHeight}`;
  };
  render() {
    return (
      <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>
    );
  }
}

export default Domensions;
