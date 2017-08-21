import { setErrorHandler } from './errorHandlerAction'
import { setAuthToken, destroyAuthToken } from './authTokenAction'
import { currentUser } from './../reducers'
import axiosHelper from '../lib/axiosHelper';
import * as Actions from './';

const initialize = {
  id: -1,
  email: '',
  name: '',
}

export const setCurrentUser = (user:currentUser|undefined) => {
  return { type: Actions.SET_CURRENT_USER, payload: user }
}

export const sessionGet = () => {
  return (dispatch:any) => {
    return axiosHelper.get(`/api/session`).then((response) => {
      dispatch(setAuthToken())
      dispatch(setCurrentUser(response.data))
    }).catch((error) => {
      dispatch(destroyAuthToken());
      dispatch(setCurrentUser(initialize));
    })
  }
}

export const sessionCreate = (params = {}) => {
  return (dispatch:any) => {
    return axiosHelper.post(`/api/session`, {user: params}).then((response) => {
      dispatch(setAuthToken())
      dispatch(setCurrentUser(response.data));
    }).catch((error) => {
      dispatch(setErrorHandler(error.response.data.message));
      dispatch(destroyAuthToken());
    })
  }
}

export const sessionDestroy = () => {
  return (dispatch:any) => {
    return axiosHelper.delete('/api/session').then((response) => {
      dispatch(destroyAuthToken());
      dispatch(setCurrentUser(initialize));
    }).catch((response) => {
      dispatch(setErrorHandler(response.data.message));
    })
  }
}

