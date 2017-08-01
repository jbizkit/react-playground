import * as React from 'react';
import { OverlayTrigger, Button, Tooltip } from 'react-bootstrap';

import "./Test.scss";

export class Wizer extends React.Component<any, any> {
    divStyle = {
        marginTop: '50px',
        textAlign: 'center',
    };

    tooltipStyle = {
        backgroundColor: 'red',
    };

    constructor(props) {
        super(props);

    }

    tooltip = (
        <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
    );

    entered = (e) => {
        e.children[0].style.borderTopColor = 'green'
        e.children[1].style.backgroundColor = 'green'
    };

    render() {
        return (
            <div style={this.divStyle}>
                <OverlayTrigger rootClose={true} placement="top" overlay={this.tooltip} onEntering={this.entered}>
                    <Button bsStyle="default">Holy guacamole!</Button>
                </OverlayTrigger>
            </div>
        );
    }
}