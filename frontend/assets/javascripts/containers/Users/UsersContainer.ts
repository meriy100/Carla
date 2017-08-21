import { connect } from 'react-redux'
import * as Reducer from '../../reducers'
import UsersComponent from '../../components/Users/UsersComponent'


const mapStateToProps = (state:Reducer.State, ownProps:any) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersComponent);