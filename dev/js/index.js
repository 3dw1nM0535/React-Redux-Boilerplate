import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import allReducers from './reducers/index';

const store = createStore(allReducers);

render(<h1>Hey Redux App</h1>, document.getElementById('root'));
