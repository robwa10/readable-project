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
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="card-title"><h2>{this.props.post.title}</h2></div>
            <div className="card-text">
              <p>{this.props.post.body}</p>
            </div>
            <h6>Author: {this.props.post.author}</h6>
            <h6>{this.props.post.timestamp}</h6>
            <VoteButton />
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
    post: state.singlePost,
    id,
  }
};

export default connect(mapStateToProps, actions)(Post);
