import * as React from 'react';
import * as Reducers from '../../reducers'
import { CardText } from 'material-ui/Card';

import SubCardComponent  from '../shared/SubCardComponent'
import ApiChannel from '../../lib/ApiChannel';

interface Props {
  user?: Reducers.User;
}

export default class UserComponent extends React.Component<Props, any> {
  componentDidMount() {
    ApiChannel.perform('action', { resource: 'users', method: 'index' });     
  }

  render() {
    return (this.props.user === undefined ? <div/> :
      <SubCardComponent title={'ユーザー詳細'} parentPath={'/users'}>
        <CardText>
          { this.props.user.name }
        </CardText>
      </SubCardComponent>
    );
  }
}