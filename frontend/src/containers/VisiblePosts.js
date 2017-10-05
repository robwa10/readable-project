import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Sidebar from '../containers/sidebar';
import PostPreview from '../components/post-preview';
import VoteButton from '../containers/vote-button';

class VisiblePosts extends Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

  fetchData() {
    if (this.props.filter === 'posts' || undefined) {
      this.props.getPosts('posts');
    } else {
      this.props.getPostsByCategory(this.props.filter);
    }
  }

  render() {
    return (
      <div className="row">
        <Sidebar />
        <div className="col-md-9 mt-5 mt-md-auto" id="posts-list">
          <div className="card">
            <div className="card-body">
              {Array.isArray(this.props.posts)
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
                      <div className="row">
                        <div>
                          <button className="btn btn-link mt-3 col-4">Edit</button>
                        </div>
                        <div>
                          <button className="btn btn-link mt-3 col-4">Delete</button>
                        </div>
                      </div>
                      {/* Add a <hr /> under all but last post */}
                      {index + 1 !== this.props.posts.length ?  <hr /> : null}
                    </div>
                  );
                })
                : null
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
