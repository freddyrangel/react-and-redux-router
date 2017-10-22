import React, { Component } from 'react';
import { connect }          from 'react-redux';
import CatImage             from '../../common/cat-image'
import * as actions         from './actions';

class Voting extends Component {
  componentDidMount() {
    this.props.fetchCatImage();
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

function VotingButtons({ upvote, downvote }) {
  return <div className='vote-buttons'>
    <button className='love-it' onClick={ upvote }>Love it!</button>
    <button className='hate-it' onClick={ downvote }>Meh...</button>
  </div>
}

function mapStateToProps({ catData }) {
  return { catData };
}

export default connect(mapStateToProps, actions)(Voting)

