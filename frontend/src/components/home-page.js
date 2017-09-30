import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import VisiblePosts from '../containers/VisiblePosts';
import Sidebar from '../containers/sidebar';
import Post from '../components/post';
import Fab from '../components/fab';

const HomePage = () => (
  <div>
    <div className="container">
      <div className="row">
        <Sidebar />
        <Switch>
          <Route path='/:filter?' component={VisiblePosts}/>
          <Route path='/post/:id' component={Post} />
        </Switch>
      </div>
    </div>
    <Fab />
  </div>
);
export default HomePage;
