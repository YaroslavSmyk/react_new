import React, { Component } from 'react';

class Life extends Component {
  constructor(props) {
    super(props);
    console.log('constructor: good place to creat state');
  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount(): cleanup befor DOM related to component will be removed');

  }

  render() {
      console.log('return React element to build DOM');
   return <div className='number'>
{this.props.number}
   </div>
  }
}

export default Life;