import React from 'react';
import { Link } from 'react-router-dom'

export default function App({ children }) {
  return <div className='app'>
    <h1>Cat-Tastrophe</h1>
    <Navigation/>
    { children }
  </div>
}

function Navigation() {
  return <div className='navigation'>
    <Link to='/voting'>Voting</Link>
    <Link to='/counter'>Counter</Link>
  </div>
}

