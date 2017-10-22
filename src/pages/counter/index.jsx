import React        from 'react';
import { connect }  from 'react-redux';
import CatImage     from '../../common/cat-image'
import * as actions from './actions';

function Counter(props) {
  return <div className='counter'>
    <CounterControls incrementCatCount={ props.incrementCatCount }
        decrementCatCount={ props.decrementCatCount }/>
    <CatImages catCount={ props.catCount } />
  </div>
}

function CounterControls(props) {
  return <div className='controls'>
    <button onClick={ props.incrementCatCount }>More Cats</button>
    <button onClick={ props.decrementCatCount }>Fewer Cats</button>
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

function mapStateToProps({ catCount }) {
  return { catCount };
}

export default connect(mapStateToProps, actions)(Counter);
