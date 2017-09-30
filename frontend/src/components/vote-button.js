import React, { Component } from 'react';

class VoteButton extends Component {
  render() {
    return (
      <div>
        <div className="row align-items-center vote-count-container">
          <div>
            <button className="btn btn-sm btn-secondary">+1</button>
          </div>
          <div className="vote-count">
            <h2 className="score">{this.props.voteScore}</h2>
          </div>
          <div>
            <button className="btn btn-sm btn-secondary">-1</button>
          </div>
        </div>
      </div>
    );
  }
}

export default VoteButton;
