import * as Actions from './'

export const destroyNextLocation = () => {
  return { type: Actions.DESTROY_NEXT_LOCATION, payload: { pathname: undefined } }
}