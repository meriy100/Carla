import { connect } from 'react-redux'
import HeaderComponent from '../../components/shared/HeaderComponent'
import { LayoutState } from '../../reducers'

import { sessionDestroy } from '../../actions/currentUserAction'
import { setLayoutState } from '../../actions/layoutStateAction'

const mapStateToProps = (state:any) => {
  return {
    current_user: state.current_user,
    layout_state: state.layout_state
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    handleLogout: () => { sessionDestroy()(dispatch) },
    handleSetLayoutState: (layout_state:LayoutState) => { dispatch(setLayoutState(layout_state)) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);