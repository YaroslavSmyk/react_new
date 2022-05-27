import React, { Component } from 'react';
import Greeting from './Greeting';
import Logout from './Logout';
import Login from './Login';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    let button;
    if (this.state.isLoggedIn) {
      button = <Logout onLogout={this.handleLogout}/>;
    } else {
      button = <Login onLogin={this.handleLogin}/>;
    }
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>{button}</div>
      </div>
    );
  }
}
export default Auth;
