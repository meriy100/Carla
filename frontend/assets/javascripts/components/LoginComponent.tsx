import { Redirect} from 'react-router-dom'
import * as React from "react";
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


import { Alert } from '../reducers'
import { currentUser, AuthToken } from '../reducers'

interface Props {
  current_user: currentUser;
  alert: Alert;
  auth_token:AuthToken;
  handleLogin: any;
  handleLoginCheck:any;
}

interface State {
  email:string;
  password:string;
}

export default class LoginComponent extends React.Component<Props, State> {

  constructor(props:Props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmailChange = (event:any, value:string) => {
    this.setState({email: value})
  }

  handlePasswordChange = (event:any, value:string) => {
    this.setState({password: value})
  }

 componentWillMount() {
    this.userWillTransfer(this.props);
  }

  componentWillUpdate(nextProps:Props) {
    this.userWillTransfer(nextProps);
  }

  userWillTransfer(props:Props) {
    if(props.auth_token.has_session === undefined) {
      props.handleLoginCheck();
    }
  }

  render() {
    let cardStyle = {
      "marginLeft": "auto",
      "marginRight": "auto",
      "marginTop": "48px",
      "width": "480px"
    }

    if (this.props.auth_token.has_session === undefined) {
      return(<div></div>);
    } else {
      return (
        !this.props.auth_token.has_session ? (
          <Card style={cardStyle}>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              <TextField
                hintText="Hint Text"
                floatingLabelText="Fixed Floating Label Text"
                floatingLabelFixed={true}
                value={this.state.email}
                onChange={this.handleEmailChange} />
                <br />
            <TextField
              hintText="Password Field"
              floatingLabelText="Password"
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange} />
            </CardText>
            <CardActions>
              <FlatButton label="Login" onClick={() => this.props.handleLogin({email: this.state.email, password: this.state.password})}/>
            </CardActions>
            <Snackbar
                      open={this.props.alert.is_show}
                      message={this.props.alert.message}
                      autoHideDuration={4000}
                    />
          </Card>
        ) : (
          <Redirect to={'/'} />
        )
      ) 
    }
  }
}
