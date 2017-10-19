import React    from 'react';
import CatImage from '../cat-image'

export default function Counter(props) {
  return <div className='counter'>
    <CounterControls { ...props }/>
    <CatImages { ...props }/>
  </div>
}

function CounterControls({ incrementCatCount, decrementCatCount }) {
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
