import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';


class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: false,
    };
  }

  setText = () => {
    this.setState({
      isOnline: true,
    });
  };

  render() {
    return (
      <div>
        {this.state.isOnline ? (
          <Online isOnline={this.state.isOnline} />
        ) : (
          <Offline isOnline={this.setText} />
        )}
      </div>
    );
  }
}

export default Status;
