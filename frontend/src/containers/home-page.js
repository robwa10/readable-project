import React, { Component } from 'react';
import { connect } from 'react-redux';
import { recievePosts, recieveCategories } from '../actions';
import Sidebar from '../components/sidebar';
import PostsList from '../components/posts-list';
import Fab from '../components/fab';
import MDSpinner from "react-md-spinner";
import * as api from '../API_Calls';

class HomePage extends Component {

  componentDidMount() {
    api.getPostsOrCategories('posts').then((data) => {
      this.props.recievePosts(data); // Pass to posts-actions
      console.log(this.props.posts)
    })
    api.getPostsOrCategories('categories').then((data) => {
      this.props.recieveCategories(data); // Pass to categories-actions
      console.log(this.props.categories)
    })
  }

  // Takes in state and filters based on category
  filterPosts(filter, state) {

  }

  render() {
    return (
      <div>
        <div className="container">
          {this.props.categories
            ?
            <div className="row">
              <Sidebar
                categories={this.props.categories}
              />
              <PostsList
                posts={this.props.posts}
              />
            </div>
            :
            <div className="row" style={{height: '30vh'}}>
              <div className="col text-center align-self-center">
                <MDSpinner size='50' />
              </div>
            </div>
          }
        </div>
        <Fab />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
      posts: state.posts,
      categories: state.categories,
    }
}

export default connect(mapStateToProps, { recievePosts, recieveCategories })(HomePage);
