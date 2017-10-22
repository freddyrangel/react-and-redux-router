import React, { Component } from 'react';
import { connect }          from 'react-redux';
import Counter              from '../counter';
import Voting               from '../voting';
import * as actions         from '../../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showCounter: true };
  }

  toggle = () => this.setState({ showCounter: !this.state.showCounter });

  render() {
    const props = {
      ...this.state,
      ...this.props,
      toggle: this.toggle
    }

    const childComponent = this.state.showCounter
      ? <Counter { ...props }/>
      : <Voting { ...props }/>
    return <div className='app'>
      <h1>Cat-Tastrophe</h1>
      <Navigation { ...props }/>
      { childComponent }
    </div>
  }
}

function Navigation({ showCounter, toggle }) {
  return <div className='navigation'>
    <button onClick={ toggle }>Go To { showCounter ? 'Voting' : 'Counter' }</button>
  </div>
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, actions)(App);
