import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header';
import Post from '../components/post';
import HomePage from '../containers/home-page';

class App extends Component {

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
