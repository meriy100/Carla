import { User } from './'
import { AnyAction } from 'redux'
import * as Actions from '../actions'

const initial:Array<User> = []
export default (state = initial, action:AnyAction) => {
  switch (action.type) {
    case Actions.SET_USERS:
      return action.payload;
    default:
      return state;
  }
}