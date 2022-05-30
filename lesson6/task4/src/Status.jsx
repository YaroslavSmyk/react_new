import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

// const online = 'All good';
// const offline = 'Offline';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true,
    };
  }

  setText = () => {
    this.setState({
      isOnline: false,
    });
  };

  render() {
    return (
      <div>
          {this.state.isOnline? <Offline isOnline={this.setText}/> :
          <Online isOnline={this.state.isOnline}/>}
      </div>
    );
  }
}

export default Status;
