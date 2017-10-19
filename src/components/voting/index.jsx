import React, { Component } from 'react';
import CatImage             from '../cat-image'

export default class Voting extends Component {
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
