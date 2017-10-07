import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import VoteButton from '../containers/vote-button';

class Post extends Component {
  constructor(props) {
    super(props);
    this.postScore = this.postScore.bind(this);
    this.commentScore = this.commentScore.bind(this);
  }

  componentDidMount() {
    this.props.getSinglePost(this.props.match.params.id);
    this.props.getPostComments(this.props.match.params.id);
  };

  postScore(id, option) {
    this.props.postVote(id, option)
  }

  commentScore(id, option) {
    this.props.commentVote(id, option)
  }

  render () {
    return (
      <div className="container">
        {Object.keys(this.props.posts).length > 0
          ?
          _.map(this.props.posts, (p) => (
            <div key={p.id} className="card">
              <div className="card-body">
                <div className="card-title"><h2>{p.title}</h2></div>
                <div className="card-text">
                  <p>{p.body}</p>
                </div>
                <h6>{`Author: ${p.author}`}</h6>
                <VoteButton
                  increment={() => this.postScore(p.id, 'upVote')}
                  decrement={() => this.postScore(p.id, 'downVote')}
                  voteScore={p.voteScore}
                  id={p.id}
                />
                <div className="row">
                  <div>
                    <button className="btn btn-link mt-3 col-4">Comment</button>
                  </div>
                  <div>
                    <Link to={`/edit_post/${this.props.id}`} role="button" className="btn btn-link mt-3 col-4">Edit</Link>
                  </div>
                  <div>
                    <button className="btn btn-link mt-3 col-4">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))
          : null
        }

        {Object.keys(this.props.comments).length > 0
          ? _.map(this.props.comments, (comment) => (
            <div key={comment.id} className="card mt-3">
              <div className="card-body">
                <div className="card-text">
                  <p>{comment.body}</p>
                </div>
                <h6>{`Author: ${comment.author}`}</h6>
                <VoteButton
                  increment={() => this.commentScore(comment.id, 'upVote')}
                  decrement={() => this.commentScore(comment.id, 'downVote')}
                  voteScore={comment.voteScore}
                  id={comment.id}
                />
                <div className="row">
                  <div>
                    <button className="btn btn-link mt-3 col-4">Edit</button>
                  </div>
                  <div>
                    <button className="btn btn-link mt-3 col-4">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))
          :
          <div className="card mt-3">
            <div className="card-body">
              <div className="card-text">
                <p>You should add a comment.</p>
              </div>
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
    comments: state.comments,
    id,
  }
};

export default connect(mapStateToProps, actions)(Post);
