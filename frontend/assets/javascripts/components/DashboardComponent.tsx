
import * as React from 'react';
import { Card, CardTitle } from 'material-ui/Card';


interface Props {
  routes: Array<any>;
}

export default class DashboardComponent extends React.Component<Props, any> {
  render() {
    return ( 
      <div>
        <Card>
          <CardTitle><h2>DashBord</h2></CardTitle>
        </Card>
      </div>
    );
  }
}