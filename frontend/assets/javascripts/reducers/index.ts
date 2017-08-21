import { combineReducers } from 'redux';

import alert from './alert';
import auth_token from './auth_token';
import current_user from './current_user';
import issues from './issues';
import layout_state from './layout_state';
import next_location from './next_location'
import users from './users';

export interface currentUser {
  id: number;
  name: string;
  email: string;
}

export interface AuthToken {
  has_session?: boolean;
}

export interface ErrorHandler {
  message: string;
  is_show: boolean;
}

export interface LayoutState {
  is_drawer_open: boolean;
}

export interface Alert {
  message?: string;
  type?: string;
  is_show: boolean;
}

export interface NextLocation {
  pathname?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Comment {
  id: number;
  created_by: User;
  content: string;
}

export interface Issue {
  id: number;
  title: string;
  state: string;
  created_by: User;
  users: User[];
  comments: Comment[];
}

export interface State {
  current_user?: currentUser;
  auth_token: AuthToken;
  alert: Alert;
  layout_state: LayoutState;
  next_location: NextLocation;
  users: User[];
  issues: Issue[];
}

const reducer = combineReducers({
  current_user,
  users,
  next_location,
  auth_token,
  layout_state,
  alert,
  issues,
})
export default reducer;
