import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostView from '../components/post-view';
import NewPost from '../containers/new-post';
import NewComment from '../containers/new-comment';
import EditComment from '../containers/edit-comment';
import EditPost from '../containers/edit-post';

const Body = () => (
  <div>
    <Switch>
      <Route exact path='/create/new_post' component={NewPost} />
      <Route exact path='/edit_post/:id' component={EditPost} />
      <Route exact path='/comment/:id' component={NewComment} />
      <Route exact path='/edit_comment/:id' component={EditComment} />
      <Route path='/' component={PostView} />
    </Switch>
  </div>
)
export default Body;
