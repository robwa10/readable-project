import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostPreview from '../components/post-preview';

class PostsList extends Component {
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
          {index + 1 !== this.props.posts.length ?  <hr /> : null}
        </div>
      );
    });
  }

  render() {
    console.log('Props', this.props);
    return (
        <div className="col-md-9" id="posts-feed">
          <div className="card">
            <div className="card-body">
      			{this.renderPosts()}
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
     posts: state.posts
  }
};

export default connect(mapStateToProps)(PostsList);
