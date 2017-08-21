import { AnyAction } from 'redux';
import { AuthToken } from './';
import * as Actions from '../actions'

const initial = {
}

export default (state = initial, action:AnyAction):AuthToken => {
  switch(action.type) {
    case Actions.SET_AUTH_TOKEN:
      return action.payload;
    case Actions.DESTROY_AUTH_TOKEN:
      return action.payload;
    default:
      return state;
  }
}
