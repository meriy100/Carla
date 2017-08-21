import * as Actions from './'
import { LayoutState } from '../reducers'

export const setLayoutState = (layout_state:LayoutState) => {
  return ({ type: Actions.SET_LAYOUT_STATE, payload: layout_state })
}