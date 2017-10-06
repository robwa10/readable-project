import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../components/home-page';
import NewPost from '../components/new-post';

const Body = () => (
  <div>
    <Switch>
      <Route exact path='/create/new_post' component={NewPost} />
      <Route path='/' component={HomePage} />
    </Switch>
  </div>
)
export default Body;
