import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import VoteButton from '../containers/vote-button';

class Post extends Component {
  componentDidMount() {
    this.props.getSinglePost(this.props.match.params.id);
    this.props.getPostComments(this.props.match.params.id);
  };

  render () {
    console.log("Post Comments: ", this.props.comments);
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
            <div className="row">
              <div>
                <button className="btn btn-link mt-3 col-4">Comment</button>
              </div>
              <div>
                <button className="btn btn-link mt-3 col-4">Edit</button>
              </div>
              <div>
                <button className="btn btn-link mt-3 col-4">Delete</button>
              </div>
            </div>
          </div>
        </div>
        }
        {this.props.comments !== undefined
          ? this.props.comments.map((comment) => (
            <div key={comment.id} className="card mt-3">
              <div className="card-body">
                <div className="card-text">
                  <p>{comment.body}</p>
                </div>
                <h6>{`Author: ${comment.author}`}</h6>
                <VoteButton
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
          : null
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
