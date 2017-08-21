import { AnyAction } from 'redux';
import { Alert } from './';
import * as Actions from '../actions';

const initial = {
  is_show: false,
}

export default (state = initial, action:AnyAction):Alert => {
  switch(action.type) {
    case Actions.HIDDEN_ALERT:
      return action.payload;
    case Actions.SET_ERROR_HANDLER:
      return Object.assign(action.error, { type: 'danger', is_show: true });
    default:
      if (action.notify) { 
        return Object.assign(action.notify, { is_show: true });
      } else {
        return state;
      }
  }
}
