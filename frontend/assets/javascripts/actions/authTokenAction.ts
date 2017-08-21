import * as Actions from './';

export const setAuthToken = () => {
  return { type: Actions.SET_AUTH_TOKEN, payload: { has_session: true } }
}

export const destroyAuthToken = () => {
  return { type: Actions.DESTROY_AUTH_TOKEN, payload: { has_session: false } }
}
