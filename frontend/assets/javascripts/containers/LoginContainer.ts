import { connect } from 'react-redux'
import LoginComponent from '../components/LoginComponent';

import { sessionCreate, sessionGet } from '../actions/currentUserAction'

const mapStateToProps = (state:any) => {
  return {
    current_user: state.current_user,
    alert: state.alert,
    auth_token: state.auth_token,
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    handleLogin: (user:{}) => { sessionCreate(user)(dispatch) },
    handleLoginCheck: () => { sessionGet()(dispatch) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

