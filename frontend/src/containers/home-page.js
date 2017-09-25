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
    api.getPostsOrCategories('posts').then(data =>
      this.props.recievePosts(data) // Pass to posts-actions
    );
    api.getPostsOrCategories('categories').then(data =>
      this.props.recieveCategories(data) // Pass to categories-actions
    );
  }

  // Turn the categories objecy into an array and capitalize first letter
  mapCategories(object) {
    let categoriesArray = [];
    object.map((category) => (categoriesArray.push(
      category.name.charAt(0).toUpperCase() + category.name.slice(1)
    )))
    return categoriesArray;
  }

  render() {
    return (
      <div>
        <div className="container">
          {this.props.categories
            ?
            <div className="row">
              <Sidebar
                categories={this.mapCategories(this.props.categories)}
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
