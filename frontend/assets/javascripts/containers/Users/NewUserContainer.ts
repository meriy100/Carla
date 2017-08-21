import { connect } from 'react-redux'
import * as Reducer from '../../reducers'
import NewUserComponent from '../../components/Users/NewUserComponent'
import { destroyNextLocation } from '../../actions/nextLocationAction'

const mapStateToProps = (state:Reducer.State, ownProps:any) => {
  return {
    next_location: state.next_location,
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    handleDestroyNextLocation: () => dispatch(destroyNextLocation()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewUserComponent);