import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import VoteButton from '../containers/vote-button';

class Post extends Component {
  componentDidMount() {
    this.props.getSinglePost(this.props.match.params.id);
  };

  render () {
    return (
      <div className="container">
        {this.props.posts[0] === undefined ?
        null
        :
        <div className="card">
          <div className="card-body">
            <div className="card-title"><h2>{this.props.posts[0].title}</h2></div>
            <div className="card-text">
              <p>{this.props.posts[0].body}</p>
            </div>
            <h6>{`Author: ${this.props.posts[0].author}`}</h6>
            <VoteButton
              voteScore={this.props.posts[0].voteScore}
              id={this.props.posts[0].id}
            />
            <button className="btn btn-secondary mt-3">Edit</button>
          </div>
        </div>
        }
      </div>
    );
  }
};

const mapStateToProps = (state, { match }) => {
  const id = match.params.id;
  return {
    posts: state.posts,
    id,
  }
};

export default connect(mapStateToProps, actions)(Post);
