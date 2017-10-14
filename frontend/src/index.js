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
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import './App.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
  ));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
