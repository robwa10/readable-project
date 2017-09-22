import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import PostsList from '../containers/posts-list';
import Fab from '../components/fab';

class HomePage extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <Sidebar />
            <PostsList />
          </div>
        </div>
        <Fab />
      </div>
    )
  }
}

export default HomePage;
