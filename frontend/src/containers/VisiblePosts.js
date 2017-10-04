import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Sidebar from '../containers/sidebar';
import PostPreview from '../components/post-preview';
import VoteButton from '../containers/vote-button';

class VisiblePosts extends Component {
  componentDidMount() {
    this.props.getPosts('posts');
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      if (this.props.filter === 'posts' || undefined) {
        this.props.getPosts('posts');
      } else {
        this.props.getPostsByCategory(this.props.filter);
      }
    }
  }

  fetchData() {
    const { filter, getPosts } = this.props;
    getPosts(filter);
  }

  render() {
    return (
      <div className="row">
        <Sidebar />
        <div className="col-md-9 mt-5 mt-md-auto" id="posts-list">
          <div className="card">
            <div className="card-body">
              {this.props.posts
                ? this.props.posts.map((p, index) => {
                  return (
                    <div key={p.id}>
                      <PostPreview
                        id={`/${p.category}/${p.id}`}
                        title={p.title}
                        score={p.voteScore}
                        author={p.author}
                      />
                      <VoteButton
                        voteScore={p.voteScore}
                        id={p.id}
                      />
                      {/* Add a <hr /> under all but last post */}
                      {index + 1 !== this.props.posts.length ?  <hr /> : null}
                    </div>
                  );
                })
                : <h1>Come here often? Oh, you're waiting for someone else...</h1>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

}
const mapStateToProps = (state, { match }) => {
  let filter = match.params.filter || 'posts';
    return {
    posts: state.posts,
    filter,
  }
};

export default connect(mapStateToProps, actions)(VisiblePosts);
