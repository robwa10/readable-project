import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header';
import Post from '../components/post';
import HomePage from '../components/home-page';
import * as API_Calls from '../API_Calls';

class App extends Component {
  componentDidMount() {
    API_Calls.getPostsOrCategories("posts").then((data) => {
      console.log(data);
    })
  }
  render() {
    return (
      <div>
        <Header />

            <Route exact path="/" render={() => (
              <HomePage />
            )}/>

            <Route exact path="/post" render={() => (
              <Post />
            )}/>

      </div>
    );
  }
}

export default App;
