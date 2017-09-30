import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Sidebar from '../containers/sidebar';
import PostPreview from '../components/post-preview';

class VisiblePosts extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentWillUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter || !undefined) {
      this.fetchData();
    }
  }
  fetchData() {
    const { filter, getPosts } = this.props;
    getPosts(filter);
  }

  render() {
    const posts = this.props.posts;
    return (
      <div className="row">
        <Sidebar />
        <div className="col-md-9 mt-5 mt-md-auto" id="posts-list">
          <div className="card">
            <div className="card-body">
              {posts
                ? posts.map((p, index) => {
                  return (
                    <div key={p.id}>
                      <PostPreview
                        id={p.id}
                        title={p.title}
                        body={`${p.body.substring(0, 300)}...`}
                        score={p.voteScore}
                        author={p.author}
                        timestamp={p.timestamp}
                      />
                      {/* Add a <hr /> under all but last post */}
                      {index + 1 !== posts.length ?  <hr /> : null}
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
  const filter = match.params.filter || 'posts';
  return {
    posts: state.posts,
    filter,
  }
};

export default connect(mapStateToProps, actions)(VisiblePosts);
