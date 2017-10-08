import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import Sidebar from '../containers/sidebar';
import PostPreview from '../components/post-preview';
import VoteButton from '../components/vote-button';

class VisiblePosts extends Component {
  constructor(props) {
    super(props);
    this.postScore = this.postScore.bind(this);
    this.commentScore = this.commentScore.bind(this);
    this.postDelete = this.postDelete.bind(this);
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

  postScore(id, option) {
    this.props.postVote(id, option)
  }

  commentScore(id, option) {
    this.props.commentVote(id, option)
  }

  postDelete(id) {
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    })
  }

  fetchData() {
    if (this.props.filter === 'posts' || undefined) {
      this.props.getPosts('posts');
    } else {
      this.props.getPostsByCategory(this.props.filter);
    }
  }

  renderPosts() {
    const postsCount = Object.keys(this.props.posts).length;
    let counter = 0;
    return _.map(this.props.posts, (p, index) => {
      counter++
      return (
        <div key={counter + postsCount}>
          <PostPreview
            id={`/${p.category}/${p.id}`}
            title={p.title}
            score={p.voteScore}
            author={p.author}
          />
          <VoteButton
            increment={() => this.postScore(p.id, 'upVote')}
            decrement={() => this.postScore(p.id, 'downVote')}
            voteScore={p.voteScore}
            id={p.id}
          />
          <div className="row">
            <div>
              <Link to={`/edit_post/${p.id}`} role="button" className="btn btn-link mt-3 col-4">Edit</Link>
            </div>
            <div>
              <button onClick={() => this.postDelete(p.id)} className="btn btn-link mt-3 col-4">Delete</button>
            </div>
          </div>
          {/* Add a <hr /> under all but last post */}
          {counter < postsCount  ?  <hr /> : null}
        </div>
      );
    })
  }

  render() {
    return (
      <div className="row">
        <Sidebar />
        <div className="col-md-9 mt-5 mt-md-auto" id="posts-list">
          <div className="card">
            <div className="card-body">
              {this.props.posts === undefined ? null : this.renderPosts()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }, { match }) => {
  let filter = match.params.filter || 'posts';
    return {
    posts: posts,
    filter,
  }
};

export default connect(mapStateToProps, actions)(VisiblePosts);
