import * as React from "react";
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import FlatButton from 'material-ui/FlatButton';

import { currentUser, LayoutState } from '../../reducers'
import { Link } from 'react-router-dom';

interface Props {
  current_user: currentUser;
  layout_state: LayoutState;
  handleLogout: any;
  handleSetLayoutState: any;
}

interface State {
  value:number;
}

export default class LoginComponent extends React.Component<Props, State> {

  constructor(props:Props) {
    super(props)
    this.state = {
      value: 3,
    };
  }


  handleChange = (event:any, index:any, value:number) => this.setState({value});

  render() {
    const styles = {
      title: {
        cursor: 'pointer',
      },
    };
    return (
      <AppBar
        title={<Link to={'/'}><span style={styles.title}>Title</span></Link>}
        iconElementLeft={<IconButton onClick={() => this.props.handleSetLayoutState({is_drawer_open: true})}><NavigationMenu /></IconButton>}
        iconElementRight={ <FlatButton label="Logout" onClick={() => this.props.handleLogout()} /> }
      />
    )
  }
}