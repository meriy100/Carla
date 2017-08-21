import * as React from 'react';
import { Route } from 'react-router-dom'

import HeaderContainer from '../containers/shared/HeaderContainer'
import DrawerContainer from '../containers/shared/DrawerContainer'
import AlertNotificationContainer from '../containers/shared/AlertNotificationContainer'

export default class LayoutComponent extends React.Component<any, {}>  {
  render() {
    const layoutBodyStayle = {
      marginTop: '48px',
    }
    return (
      <div>
        <HeaderContainer />
        <Route path={''} component={DrawerContainer} />
        <AlertNotificationContainer />
        <div className="container" style={layoutBodyStayle}>
          <Route children={this.props.children} />
        </div>
      </div>
    )
  }
}
