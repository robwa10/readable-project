import React, { Component } from 'react';
import PostPreview from './post-preview';

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
          {/* Add a <hr /> under all but last post */}
          {index + 1 !== this.props.posts.length ?  <hr /> : null}
        </div>
      );
    });
  }

  render() {
    console.log('Posts List Props: ', this.props.posts);
    return (
        <div className="col-md-9 mt-5 mt-md-auto" id="posts-list">
          <div className="card">
            <div className="card-body">
      			     {this.renderPosts()}
            </div>
          </div>
        </div>
    );
  }
}

export default PostsList;
