import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../components/home-page';

const Body = () => (
  <div>
    <Switch>
      <Route path='/' component={HomePage} />
    </Switch>
  </div>
)
export default Body;
