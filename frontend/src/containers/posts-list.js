import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts } from '../actions';
import PostPreview from '../components/post-preview';

class PostsList extends Component {

  componentWillMount() {
    this.props.fetchAllPosts();
  }

  renderPosts() {
    return this.props.posts.map((post, index) => {
      return (
        <div key={post.id}>
          <PostPreview
            title={post.title}
            body={post.body}
            score={post.voteScore}
            author={post.author}
            timestamp={post.timestamp}
          />
          {/* Add a <hr /> under all but last post */}
          {index + 1 !== this.props.posts.length ?  <hr /> : null}
        </div>
      );
    });
  }

  render() {
    return (
        <div className="col-md-9 mt-5 mt-md-auto" id="posts-list">
          <div className="card">
            <div className="card-body">
      			     {this.props.posts ? this.renderPosts() : null}
            </div>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
      posts: state.posts,
    }
}

export default connect(mapStateToProps, { fetchAllPosts })(PostsList);
