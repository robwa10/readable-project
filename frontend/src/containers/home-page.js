import React, { Component } from 'react';
import { connect } from 'react-redux';
import { recievePosts, fetchAllCategories } from '../actions';
import Sidebar from '../components/sidebar';
import PostsList from '../components/posts-list';
import Fab from '../components/fab';
import MDSpinner from "react-md-spinner";
import * as api from '../API_Calls';

class HomePage extends Component {

  componentDidMount() {
    this.props.fetchAllCategories();
    api.getPostsOrCategories('posts').then(posts =>
      this.props.recievePosts(posts)
    );
  }

  mapCategories(object) {
    let categoriesArray = [];
    object.map((category) => {
      categoriesArray.push(category.name);
    })
    return categoriesArray;
  }

  render() {
    console.log('Home Page Props: ', this.props.posts);
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
      categories: state.categories.categories,
    }
}

export default connect(mapStateToProps, { recievePosts, fetchAllCategories })(HomePage);
