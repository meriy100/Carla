import * as Actions from '../actions'
import { currentUser } from './'

const initialize = {
  id: -1,
  email: '',
  name: '',
}

export default (state = initialize, action: any): currentUser => {
  switch (action.type) {
    case Actions.SET_CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
}
