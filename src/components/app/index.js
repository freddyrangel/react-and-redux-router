import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { catCount: 1 }
  }

  incrementCatCount = () => {
    this.setState({ catCount: this.state.catCount + 1 });
  }

  decrementCatCount = () => {
    const { catCount } = this.state;
    if (catCount > 0) {
      this.setState({ catCount: this.state.catCount - 1 });
    }
  }

  render() {
    const methods = {
      incrementCatCount: this.incrementCatCount,
      decrementCatCount: this.decrementCatCount
    };
    return <div className='app'>
      <h1>Cat-Tastrophe</h1>
      <Counter { ...this.state } methods={ methods }/>
    </div>
  }
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

function CatImage() {
  const url = 'http://thecatapi.com/api/images/get?format=src&type=gif';
  return <img src={ url } width='200' alt='Cat'/>
}
