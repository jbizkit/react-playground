import * as React from 'react';
import ReactCSSTransitionGroup = require('react-addons-css-transition-group');
import { Child } from './Child';

import "./Test.scss";

export interface Props {
    texts: string[],
}

interface State {
    hover: boolean,
    text: string,
}

export class Test extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            hover: false,
            text: this.props.texts[0],
        };

        this.setInterval();
    }

    private interval: number;
    private i = 0;

    private setInterval = () => {
        this.interval = setInterval(() => {
            setTimeout(() => {
                this.setState({ text: this.props.texts[this.i] });
            });
            this.i += 1;
            if (this.i == this.props.texts.length) this.i = 0;
        }, 2000);
    };

    onMouseOver = () => {
        clearInterval(this.interval);
        this.i = 0;
        this.setState({ hover: true });
    };

    onMouseOut = () => {
        this.setState({ hover: false });
        this.setInterval();
    };

    onGetContent = () => {
        if (this.state.hover) return <div>Hovered</div>;

        return (
            <ReactCSSTransitionGroup transitionName="example"
                transitionEnterTimeout={500}
                transitionAppearTimeout={500}
                transitionLeaveTimeout={300}>
                <Child key={this.state.text} text={this.state.text} />
            </ReactCSSTransitionGroup>
        );
    };

    render() {
        return (
            <div className="mainDiv" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                {this.onGetContent()}
            </div>
        )
    };
};