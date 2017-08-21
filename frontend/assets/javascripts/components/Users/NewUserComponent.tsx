import * as React from 'react';

import TextField from 'material-ui/TextField';
import { CardActions, CardText} from 'material-ui/Card';
import { RaisedButton } from 'material-ui'

import * as Reducers from '../../reducers'
import SubCardComponent  from '../shared/SubCardComponent'
import ApiChannel from '../../lib/ApiChannel';

interface Props {
  next_location:Reducers.NextLocation;
  history:any;
  handleDestroyNextLocation:any;
}

const initialze = {
  email: '',
  name: '',
}

export default class NewUserComponent extends React.Component<Props, any> {
  constructor() {
    super();
    this.state = { user: initialze }
  }

  componentWillReceiveProps(nextProps:any) {
    if ( nextProps.next_location.pathname !== undefined ) {
      this.props.history.push(nextProps.next_location.pathname);
      this.props.handleDestroyNextLocation();
    }
  }

  handleField (event:any, value:string, field:string) {
    let nextField:any =  this.state.user;
    nextField[field] = value;
    this.setState( { user: Object.assign( this.state.user, nextField ) } )
  }

  handleSubmit (event:any) {
    event.preventDefault();
    ApiChannel.perform('action', { resource: "users", method: "create", user: this.state.user });     
  }

  render() {
    return ( 
      <SubCardComponent key={this.props.next_location.pathname} title={"New User"} parentPath={"/users"} >
        <form onSubmit={(event) => this.handleSubmit(event)} >
          <CardText>
            <TextField
              hintText="email"
              value={this.state.user.email}
              onChange={ (event:any, value:string) => this.handleField(event, value, 'email')} 
              floatingLabelText=""
              floatingLabelFixed={true} />
            <br />
            <TextField
              hintText="name"
              value={this.state.user.name}
              onChange={ (event:any, value:string) => this.handleField(event, value, 'name')} 
              floatingLabelText=""
              floatingLabelFixed={true} />
          </CardText>
          <CardActions>
            <RaisedButton label="Create" type="submit" />
          </CardActions>
        </form>
      </SubCardComponent>
    );
  }
}