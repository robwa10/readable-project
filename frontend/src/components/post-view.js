import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostsList from '../containers/posts-list';
import Post from '../containers/post';
import Fab from '../components/fab';

const PostView = () => (
  <div>
    <div className="container">
      <Switch>
        <Route exact path='/:filter?' component={PostsList}/>
        <Route exact path='/:filter/:id' component={Post} />
      </Switch>
    </div>
    <Fab />
  </div>
);
export default PostView;
