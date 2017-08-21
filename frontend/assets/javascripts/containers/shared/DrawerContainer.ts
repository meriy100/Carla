import { connect } from 'react-redux'
import DrawerComponent from '../../components/shared/DrawerComponent'
import { LayoutState } from '../../reducers'

import { setLayoutState } from '../../actions/layoutStateAction'

const mapStateToProps = (state:any) => {
  return {
    layout_state: state.layout_state
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    handleSetLayoutState: (layout_state:LayoutState) => { dispatch(setLayoutState(layout_state)) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerComponent);