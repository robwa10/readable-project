import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../components/home-page';
import NewPost from '../components/new-post';
import NewComment from '../containers/new-comment';

const Body = () => (
  <div>
    <Switch>
      <Route exact path='/create/new_post' component={NewPost} />
      <Route exact path='/edit_post/:id' component={NewPost} />
      <Route exact path='/comment/:id' component={NewComment} />
      <Route path='/' component={HomePage} />
    </Switch>
  </div>
)
export default Body;
