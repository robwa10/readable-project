import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import VoteButton from '../containers/vote-button';

class Post extends Component {
  componentDidMount() {
    this.fetchData();
  };

  fetchData() {
    console.log('Match id: ', this.props.match.params.id);
    this.props.getSinglePost(this.props.match.params.id);
  };


  render () {
    const { title,
      body,
      author,
      voteScore,
      id, } = this.props.posts;
      console.log('ID: ', id);
      console.log('Singel Post: ', this.props);
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="card-title"><h2>{title}</h2></div>
            <div className="card-text">
              <p>{body}</p>
            </div>
            <h6>Author: {author}</h6>
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
    posts: state.posts,
    id,
  }
};

export default connect(mapStateToProps, actions)(Post);
