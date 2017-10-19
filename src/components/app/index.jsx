import React, { Component } from 'react';
import * as AT              from '../../constants.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catCount: 1,
      showCounter: true,
      catData: { url: null }
    }
  }

  incrementCatCount = () => {
    this.setState({ catCount: this.state.catCount + 1 });
  };

  decrementCatCount = () => {
    const { catCount } = this.state;
    if (catCount > 0) {
      this.setState({ catCount: this.state.catCount - 1 });
    }
  };

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
      methods: {
        incrementCatCount : this.incrementCatCount,
        decrementCatCount : this.decrementCatCount,
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

function Counter(props) {
  return <div className='counter'>
    <CounterControls { ...props }/>
    <CatImages { ...props }/>
  </div>
}

function CounterControls({ methods: { incrementCatCount, decrementCatCount } }) {
  return <div className='controls'>
    <button onClick={ incrementCatCount }>More</button>
    <button onClick={ decrementCatCount }>Less</button>
  </div>
}

function CatImages({ catCount }) {
  if (catCount < 1 ) return <h2>No Cats!</h2>;

  const cats = [];

  for (let i = 0; i < catCount; i++) {
    cats.push(<CatImage key={ i }/>)
  }

  return <div className="cat-images">
    { cats }
  </div>
}

function CatImage({ url }) {
  return <img src={ url || AT.CAT_IMAGE_URL } width='200' alt='Cat'/>
}

class Voting extends Component {

  componentDidMount() {
    this.props.methods.fetchCatImage();
  }

  render() {
    const { url } = this.props.catData;
    return <div className='voting-container'>
      <VotingButtons { ...this.props }/>
      <div className='cat-image'>
        { !!url ? <CatImage url={ url } /> : <span>Loading...</span> }
      </div>
    </div>
  }
}

function VotingButtons({ methods: { upvote, downvote } }) {
  return <div className='vote-buttons'>
    <button className='love-it' onClick={ upvote }>Love it!</button>
    <button className='hate-it' onClick={ downvote }>Meh...</button>
  </div>
}
