import React from 'react';
import { Route, Switch } from 'react-router-dom';
import VisiblePosts from '../containers/VisiblePosts';
import Post from '../components/post';
import Fab from '../components/fab';

const HomePage = () => (
  <div>
    <div className="container">
      <Switch>
        <Route exact path='/:filter?' component={VisiblePosts}/>
        <Route exact path='/:filter/:id' component={Post} />
      </Switch>
    </div>
    <Fab />
  </div>
);
export default HomePage;
