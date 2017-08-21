import * as Actions from '../actions'
import { Issue } from './'

export default (state: Issue[] = [], action: any): Issue[] => {
  switch (action.type) {
    case Actions.SET_ISSUES:
      return action.payload;
    default:
      return state;
  }
}
