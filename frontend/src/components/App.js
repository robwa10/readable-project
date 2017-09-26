import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header';
import Post from '../components/post';
import HomePage from '../containers/home-page';

const App = () => (
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

export default App;
