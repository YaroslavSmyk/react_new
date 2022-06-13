import React, { Component } from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";
import PropTypes from "prop-types";

// const apiUrl = "https://626c06265267c14d566b9473.mockapi.io/api/v1/users";

// const getUrl = () => {
//   return fetch(apiUrl, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify(),
//   });
// };

class TasksList extends Component {
  state = {
    tasks: [],
  };

  fetchUserData = () => {
    const userUrl = "https://626c06265267c14d566b9473.mockapi.io/api/v1/users";
    fetch(userUrl)
      .then((response) => response.json())
      .then((tasks) =>
        this.setState({
            tasks,
        })
      );
  };


  render() {
    return (
      <div className="todo-list">
        <CreateTaskInput />
        <ul className="list">
          {this.state.tasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </ul>
      </div>
    );
  }
}

Task.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  };

export default TasksList;

// { text: "Buy milk", done: false, id: 1 },
// { text: "Pick up Tom from airport", done: false, id: 2 },
// { text: "Visit party", done: false, id: 3 },
// { text: "Visit doctor", done: true, id: 4 },
// { text: "Buy meat", done: true, id: 5 },
