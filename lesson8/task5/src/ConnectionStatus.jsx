import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    statusOn: true,
  };

  componentDidMount() {
    window.addEventListener('online', this.handeleOn);
    window.addEventListener('offline', this.handeleOff);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handeleOn);
    window.removeEventListener('offline', this.handeleOff);
  }

  handeleOff = () => {
    this.setState({
      statusOn: false,
    });
  };
  handeleOn = () => {
    this.setState({
      statusOn: true,
    });
  };

  render() {
    // const { statusOn } = this.state;

    return this.state.statusOn ? (
      <div className="status">online</div>
    ) : (
      <div className="status status_offline">offline</div>
    );
  }
}

export default ConnectionStatus;
