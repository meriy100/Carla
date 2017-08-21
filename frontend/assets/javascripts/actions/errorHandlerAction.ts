import * as Actions from './'
export const setErrorHandler= (message:string) => {
  return { type: Actions.SET_ERROR_HANDLER, error: { message: message, is_show: true } }
}