import React, { Component } from 'react';

export default class App extends Component {
  render() {
    const url = 'http://thecatapi.com/api/images/get?format=src&type=gif';
    return <div className='app'>
      <h1>Cat-Tastrophe</h1>
      <Counter />
    </div>
  }
}

function Counter() {
  return <div className='counter'>
    <div className='controls'>
      <button>More</button>
      <button>Less</button>
    </div>
    <img src={ url } width='200' alt='Cat'/>
  </div>
}
