import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class VoteButton extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.props.postVote(this.props.id, 'upVote')
  }
  decrement() {
    this.props.postVote(this.props.id, 'downVote')
  }

  render() {
    return (
      <div>
        <div className="row align-items-center vote-count-container">
          <div>
            <button
              onClick={this.decrement}
              style={{fontSize:'1.5em'}}
              className="btn btn-sm btn-link">-</button>
          </div>
          <div className="vote-count">
            <h3 className="score">{this.props.voteScore}</h3>
          </div>
          <div>
            <button
              onClick={this.increment}
              style={{fontSize:'1.5em'}}
              className="btn btn-sm btn-link">+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(VoteButton);
