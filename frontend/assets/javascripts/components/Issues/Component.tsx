import { Card, CardActions, CardText, CardTitle } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Reducers from '../../reducers'

import RaisedButton from 'material-ui/RaisedButton';

import ApiChannel from '../../lib/ApiChannel';

import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import FileFileUpload from 'material-ui/svg-icons/file/file-upload';

import {List, ListItem} from 'material-ui/List';
import {darkBlack} from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';

interface Props {
  issues: Reducers.Issue[];
}

export default class Component extends React.Component<Props, any> {
  componentDidMount() {
    ApiChannel.perform('action', { resource: 'issues', method: 'index' });
  }

  handleRequestDelete() {
    alert('ok');
  }

  render() {
    const styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
    return (
      <div>
        <Card>
          <CardTitle><h2>修正対象一覧</h2></CardTitle>
          <CardActions>
            <Link to={'/users/new'}> <RaisedButton label='Create' /></Link>
          </CardActions>
          <hr/>
          <CardText>
            { this.props.issues.map((issue) => (
              <Card key={issue.id} style={{ marginBottom: '10px' }}>
                <CardTitle>
                  <Link to={`/issues/${issue.id}`}>{issue.id}</Link>
                  <h4>{issue.title} </h4>
                  <Link to={`/users/${issue.created_by.id}`}>{issue.created_by.name}</Link>
                  <div style={
                      { display: 'flex', flexWrap: 'wrap' }
                    }>
                    {issue.users.map((user) => (
                      <Chip key={user.id} style={styles.chip}
                      onRequestDelete={this.handleRequestDelete}>
                        {user.name}
                      </Chip>
                    ))}
                  </div>
                </CardTitle>
                <List>
                  <Subheader>Today</Subheader>
                  { issue.comments.map((comment) => (
                    <ListItem key={comment.id}
                      primaryText={ comment.created_by.name }
                      secondaryText={
                        <p>
                          { comment.content }
                        </p>
                      }
                      secondaryTextLines={2}
                    />

                  )) }
                </List>
                <CardActions>
                  <FileFileUpload style={{color: '#999'}}/>
                  <CommunicationChatBubble style={{color: '#999'}} />
                </CardActions>
              </Card>
            )) }
          </CardText>
        </Card>
      </div>
    );
  }
}
