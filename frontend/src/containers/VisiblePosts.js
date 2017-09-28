import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as api from '../API_Calls';
import PostsList from '../components/posts-list';
import PostPreview from '../components/post-preview';

class VisiblePosts extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.fetchData();
    console.log('Props:', this.props);
  }

  componentWillUpdate(prevProps) {
    console.log('Update Props:', this.props);
    console.log('prevProps: ', prevProps);
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }
  fetchData() {
    const { filter, fetchPosts } = this.props;
    fetchPosts(filter);
  }

  render() {
    const posts = this.props.posts;
    console.log('Posts in Render: ', posts);
    console.log('');
    console.log('');
    return (
      <div className="col-md-9 mt-5 mt-md-auto" id="posts-list">
        <div className="card">
          <div className="card-body">
            {posts.map((post, index) => {
              return (
                <div key={post.id}>
                  <PostPreview
                    title={post.title}
                    body={`${post.body.substring(0, 300)}...`}
                    score={post.voteScore}
                    author={post.author}
                    timestamp={post.timestamp}
                  />
                  {/* Add a <hr /> under all but last post */}
                  {index + 1 !== posts.length ?  <hr /> : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  }

}
const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';
  return {
    posts: state.posts,
    filter,
  }
};

export default connect(mapStateToProps, actions)(VisiblePosts);
