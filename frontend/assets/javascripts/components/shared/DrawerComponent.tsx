import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { LayoutState } from '../../reducers'

interface Props {
  layout_state: LayoutState;
  handleSetLayoutState: any;
}

export default class DrawerComponent extends React.Component<Props, any> {
  render() {
    return (
      <Drawer open={ this.props.layout_state.is_drawer_open } >
        <AppBar
          iconElementLeft={
             <IconButton onClick={ () => { this.props.handleSetLayoutState({ is_drawer_open: false }) } }><NavigationClose /></IconButton>}
        />
        <Link to={'/users'}><MenuItem onClick={() => this.props.handleSetLayoutState({ is_drawer_open: false }) }>Users</MenuItem></Link>
        <Link to={'/issues'}><MenuItem onClick={() => this.props.handleSetLayoutState({ is_drawer_open: false }) }>Issues</MenuItem></Link>
      </Drawer>
    );
  }
}
