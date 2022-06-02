import React, { Component } from 'react';
import { render } from 'react-dom';
import UserForm from './UserForm';

class App extends Component {
  createUser = (userData) => {
    console.log(userData);
  };

  render() {
    return <UserForm onSubmit={() => this.createUser} />;
  }
}
// const App = () => {

// }

export default App;
