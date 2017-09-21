import * as React from 'react';
import { OverlayTrigger, Button, Tooltip } from 'react-bootstrap';

import "./Test.scss";

interface Props {
    name: string;
}

export class Checkbox extends React.Component<Props, any> {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <input type="checkbox" name={this.props.name} />&nbsp;Click Me
            </div>
        );
    }
}