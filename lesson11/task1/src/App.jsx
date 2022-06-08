import React, { Component } from "react";
import Numbers from "./Numbers";
import EvenNumbers from "./EvenNumbers";
import OddNimbers from "./OddNimbers";


class App extends Component {
  state = {
    number: 0,
  };

  componentDidMount() {
   this.intervalId = setInterval(() => {
      this.setState({
        number: this.state.number + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
      clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="app">
        <EvenNumbers title="Even numbers" number={this.state.number} />
        <Numbers title="All numbers" number={this.state.number} />
        <OddNimbers title="Odd numbers" number={this.state.number} />
      </div>
    );
  }
}

export default App;
