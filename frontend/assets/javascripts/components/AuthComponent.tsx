import * as React from 'react';
import { currentUser, AuthToken } from '../reducers'

import {
  Route, 
  Redirect
} from 'react-router-dom'

interface Props {
  current_user:currentUser;
  auth_token:AuthToken;
  handleLoginCheck:any;
}

export default class AuthComponent extends React.Component<Props, {}> {

  componentWillMount() {
    this.userWillTransfer(this.props);
  }

  componentWillUpdate(nextProps:Props) {
    this.userWillTransfer(nextProps)
  }

  userWillTransfer(props:Props) {
    if(props.auth_token.has_session === undefined) {
      props.handleLoginCheck();
    }
  }

  render() {
    if (this.props.auth_token.has_session === undefined) {
      return (<div></div>)
    } else {
      return (
        this.props.auth_token.has_session ? (
          <Route children={this.props.children} />
        ) : (
          <Redirect to={'/login'} />
        )
      )
    }
  }
}