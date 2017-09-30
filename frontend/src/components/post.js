import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import VoteButton from '../components/vote-button';

class Post extends Component {
  componentDidMount() {
    this.fetchData();

  };

  fetchData() {
    const { id, getSinglePost } = this.props;
    getSinglePost(id);
  };

  render () {
    const { title, body, author, timestamp, voteScore, id } = this.props.post;
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="card-title"><h2>{title}</h2></div>
            <div className="card-text">
              <p>{body}</p>
            </div>
            <h6>Author: {author}</h6>
            <h6>{timestamp}</h6>
            <VoteButton
              voteScore={voteScore}
              id={id}
            />
            <button className="btn btn-secondary mt-3">Edit</button>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, { match }) => {
  const id = match.params.id;
  return {
    post: state.post,
    id,
  }
};

export default connect(mapStateToProps, actions)(Post);
