import { combineReducers } from 'redux';
import usersReducer from './users-reducer';

export const allReducers = combineReducers({
  users: usersReducer
});

