// Thanks to Dan Abramov.
//
// His todos example projects:
// https://github.com/reactjs/redux/tree/master/examples/todos
// https://github.com/gaearon/todos.git
// and
// his egghead.io video tutorials:
// https://egghead.io/courses/getting-started-with-redux
// https://egghead.io/courses/building-react-applications-with-idiomatic-redux
// were both huge in helping me understand Redux
// and are a major influence on the code you will
// find within this app.
//
// Now that I've Stated that...you're right that was a horrible joke.

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducer from './reducers';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './App.css';

const creatStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
//const store = createStore(reducer);

ReactDOM.render(
  <Provider store={creatStoreWithMiddleware(reducer)}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
