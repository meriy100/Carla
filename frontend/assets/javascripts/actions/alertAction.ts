import * as Actions from './'

export const hiddenAlert = () => {
  return { type: Actions.HIDDEN_ALERT, payload: { is_show: false } }
}

export const setErrorHandler= (message:string) => {
  return { type: Actions.SET_ERROR_HANDLER, error: { message: message, is_show: true } }
}