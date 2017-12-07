import { combineReducers } from 'redux';
import usersReducer from './users-reducer';
import ActiveUserReducer from './active-user-reducer';

export const allReducers = combineReducers({
  users: usersReducer,
  activeUser: ActiveUserReducer
});

