import { AnyAction } from 'redux';
import { NextLocation } from './';
import * as Actions from '../actions';

const initial:NextLocation = {
}

export default (state = initial, action:AnyAction):NextLocation => {
  switch(action.type) {
    case Actions.DESTROY_NEXT_LOCATION:
      return action.payload; 
    default:
      return action.next_location ? action.next_location : state;
  }
}
