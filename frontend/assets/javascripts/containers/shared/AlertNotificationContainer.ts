import { connect } from 'react-redux'
import AlertNotificationComponent from '../../components/shared/AlertNotificationComponent'
import { hiddenAlert } from '../../actions/alertAction'

const mapStateToProps = (state:any) => {
  return {
    alert: state.alert,
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    handleHiddenAlert: () => dispatch(hiddenAlert()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertNotificationComponent);