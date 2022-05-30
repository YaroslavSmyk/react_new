import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

// const online = 'All good';
// const offline = 'Offline';

class Status extends Component {
  //     return (
  //     <div className='status'>
  //           {props.isOnline? <Online />: <Offline />}
  //     </div>)
  // }
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
    // if(this.state.isOnline) {
    //     return <div>
    //    <Offline isOnline={this.setText}/>
    //    </div>
    // } else {
    //     <div>
    //     <Online isOnline={this.state.isOnline}/>
    //     </div>
    // }
    return (
      <div>
        {this.state.isOnline ? (
          <Online isOnline={this.state.isOnline} />
        ) : (
          <Offline isOnline={this.setText} />
        )}
      </div>
    );
    //   <div>
    //       {this.state.isOnline? <Offline isOnline={this.setText}/> :
    //       <Online isOnline={this.state.isOnline}/>}
    //   </div>
  }
}

export default Status;
