import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export interface Props {
    content: string;
}

export default class MyAwesomeReactComponent extends React.Component<Props, {}> {
    render() {
        return <RaisedButton label={this.props.content} primary={true} />
    }
}