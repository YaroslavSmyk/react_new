import React, { Component } from 'react';
import Filter from './Filter.jsx';
import User from './User.jsx';

class UsersList extends Component {
  state = {
    input: '',
  };

  onChange= (event) => {
    // console.log(event.target.value);
    this.setState({
      input: event.target.value,
    });
  }

  filterName = (value) => {
return value ===''? this.props.users : this.props.users.filter((user) => user.name.toLowerCase().includes(this.state.input))
  }

  render() {
    let usersList = this.filterName(this.state.input)
    return (
      <div>
        <Filter filterText={this.state.input} count={usersList.length} onChange={this.onChange} />
        <ul className="users">
          {usersList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
