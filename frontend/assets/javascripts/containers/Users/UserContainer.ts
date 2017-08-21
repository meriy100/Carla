import { connect } from 'react-redux'
import * as Reducer from '../../reducers'
import UserComponent from '../../components/Users/UserComponent'


let findUser = (state:Reducer.State, ownProps:any) => {
  return ( state.users.find((user) => user.id == ownProps.match.params.id) )
}

const mapStateToProps = (state:Reducer.State, ownProps:any) => {
  return {
    user: findUser(state, ownProps),
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserComponent);