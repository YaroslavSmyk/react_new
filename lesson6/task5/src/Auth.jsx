import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogo: false,
      isNotLogo: false,
    };
  }

  onLogin = () => {
    this.setState({
      isLogo: true,
    });
    setTimeout(() => {
      this.setState({
        isLogo: false,
        isNotLogo: true,
      });
    }, 2000);
  };

  onLogout = () => {
    this.setState({
        isNotLogo: false,
    });
  };

  render() {
    if (this.state.isLogo) {
     return <Spinner size={50} />
    }
    if(this.state.isNotLogo){
        return <Logout onLogout={this.onLogout}/>  
    }
    return <Login onLogin={this.onLogin} />;
  }
}

export default Auth;
