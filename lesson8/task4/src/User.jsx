import React, { Component } from 'react';

class User extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.fetchUser(this.props.userID)
  }

  fetchUser = userId => {
    fetch(`https://api.github.com/users/${this.props.userID}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        user: data,
      })
    })
  }

  render() {
    const { user } = this.state;
    if (!user) {
      return null;
    }

    const { avatar_url, location, name} = user
    return (
      <div class="user">
        <img
          alt="User Avatar"
          src="https://avatars3.githubusercontent.com/u/69631?v=4"
          class="user__avatar"
        />
        <div class="user__info">
          <span class="user__name">{name}</span>

          <span class="user__location">{location}</span>
        </div>
      </div>
    );
  }
}
export default User;
