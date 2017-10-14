import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import Sidebar from '../containers/sidebar';
import PostPreview from '../components/post-preview';
import VoteButton from '../components/vote-button';

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.postScore = this.postScore.bind(this);
    this.commentScore = this.commentScore.bind(this);
    this.postDelete = this.postDelete.bind(this);
  }

  /*
   Check the value of an object within an object against a filter.
   Returns a new object containing all objects that evaluated to true.
  */
inObject = (data, filter) => {
    let myObject = {};
    if (filter === undefined) {
      return data
    } else {
      for (let key in data) {
        if (data[key].category === filter) {
          myObject[key] = data[key];
        }
      }
      return myObject
    }
  }

  postScore = (id, option) => (this.props.postVote(id, option))

  postDelete = (id) => (
    this.props.deletePost(id, () => (this.fetchData()))
  )

  renderPosts() {
    const postsCount = Object.keys(this.props.posts).length;
    let counter = 0;
    return _.map(this.inObject(this.props.posts, this.props.filter), (p) => {
      counter++
      return (
        <div key={p.id}>
          <PostPreview
            route={`/${p.category}/${p.id}`}
            title={p.title}
            score={p.voteScore}
            author={p.author}
            comments={this.props.comments[p.id]}
            timestamp={p.timestamp}
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
        <div className="col-lg-9 mt-5 mt-lg-auto" id="posts-list">
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

const mapStateToProps = ({ posts, comments }, { match }) => {
  let filter = match.params.filter;
    return {
    posts,
    comments,
    filter,
  }
};

export default connect(mapStateToProps, actions)(PostsList);
