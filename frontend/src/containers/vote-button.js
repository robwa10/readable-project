import React, { Component } from 'react';

class VoteButton extends Component {
  render() {
    return (
      <div>
        <div className="row align-items-center vote-count-container">
          <div>
            <button
              onClick={this.props.decrement}
              style={{fontSize:'1.5em'}}
              className="btn btn-sm btn-link">-</button>
          </div>
          <div className="vote-count">
            <h3 className="score">{this.props.voteScore}</h3>
          </div>
          <div>
            <button
              onClick={this.props.increment}
              style={{fontSize:'1.5em'}}
              className="btn btn-sm btn-link">+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default VoteButton;
