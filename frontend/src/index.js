import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import reducer from './reducers';
import App from './components/App';
import './App.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter><App /></BrowserRouter>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
