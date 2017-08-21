import * as React from 'react';
import { Alert } from '../../reducers'

interface Props {
  alert:Alert
  handleHiddenAlert:any
}

export default class AlertNotificationComponent extends React.Component<Props, {}> {

  render() {
    let alertStyle = { borderRadius: "0px" }
    let alertComponent = ( this.props.alert.is_show ?
        <div className={ `alert alert-${this.props.alert.type}` } role="alert" style={alertStyle} >
          <button type="button" className="close" onClick={this.props.handleHiddenAlert}><span>&times;</span></button>
          {this.props.alert.message}
        </div>
        : <div />
    )  
    return alertComponent;
  }
}