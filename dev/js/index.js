import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { allReducers } from './reducers/index';
import App from './components/App';
import { Provider } from 'react-redux';

const store = createStore(allReducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
