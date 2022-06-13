import React, { Component } from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";
import PropTypes from "prop-types";

const apiUrl = "https://626c06265267c14d566b9473.mockapi.io/api/v1/TodoList";

const getTasks = () => {
  return fetch(apiUrl)
  .then((res)=> {
      console.log(res);
      if(res.ok) {
          return res.json();
      }
  });
};

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

 fetchTasks = () => {
    getTasks().then((dataArray) => {
        this.setState({
            tasks: dataArray,
        }); 
    });
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
