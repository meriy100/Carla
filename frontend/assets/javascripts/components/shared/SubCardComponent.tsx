import * as React from 'react';

import {Card, CardTitle } from 'material-ui/Card';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { Link } from 'react-router-dom';


interface Props {
  title: any;
  parentPath: string;
}

export default class SubCardComponent extends React.Component<Props, any> {
  render() {
    return ( 
      <Card style={{ marginBottom: '48px' }}>
        <CardTitle>
          <h2>{ this.props.title }</h2>
          <IconButton style={{
            position: "absolute",
            right: '0',
            top:'0', 
          }}><Link to={this.props.parentPath} ><NavigationClose /></Link></IconButton>
        </CardTitle>
        { this.props.children }
      </Card>
    );
  }
}