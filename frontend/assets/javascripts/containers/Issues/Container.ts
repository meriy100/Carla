import { connect } from 'react-redux'
import * as Issues from '../../components/Issues';
import * as Reducer from '../../reducers'

const mapStateToProps = (state: Reducer.State, ownProps: any) => {
  return {
    issues: state.issues,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Issues.Component);
