import React, { Component } from 'react';
import { connect }          from 'react-redux';
import Counter              from '../counter';
import Voting               from '../voting';
import * as AT              from '../../constants.js';
import * as actions         from '../../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCounter: true,
      catData: { url: null }
    }
  }

  toggle = () => this.setState({ showCounter: !this.state.showCounter });

  fetchCatImage = () => {
    const params = { api_key: AT.API_KEY };
    fetch(AT.CAT_IMAGE_URL, params)
      .then(data => this.setState({ catData: data }))
      .catch(error => console.log(error));
  };

  voteCatImage = (score) => {
    const params = {
      api_key  : AT.API_KEY,
      method   : 'POST',
      mode     : 'no-cors',
      image_id : this.state.catData.url,
      score
    };
    fetch('http://thecatapi.com/api/images/vote', params)
      .then(() => this.fetchCatImage())
      .catch(error => console.log(error));
  };

  upvote = () => this.voteCatImage(10);

  downvote = () => this.voteCatImage(1);

  render() {
    const props = {
      ...this.state,
      ...this.props,
      methods: {
        toggle            : this.toggle,
        fetchCatImage     : this.fetchCatImage,
        upvote            : this.upvote,
        downvote          : this.downvote
      }
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

function Navigation({ showCounter, methods: { toggle } }) {
  return <div className='navigation'>
    <button onClick={ toggle }>Go To { showCounter ? 'Voting' : 'Counter' }</button>
  </div>
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, actions)(App);
