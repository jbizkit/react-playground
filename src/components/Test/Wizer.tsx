import * as React from 'react';
import { Fader } from './Fader';

import "./Test.scss";

export class Wizer extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0,
            items: [
                "james bond",
                "",
                "conte",
                "",
                "mourinho"
            ],
            index: 0,
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ 
                opacity: 1,
            });

            this.setState({
                index: this.state.index == 2 ? 0 : (this.state.index + 1),
            })
        }, 2000);
    }

    show = (event: any) => {
        event.preventDefault();
        this.setState({ opacity: 1 });
    };

    hide = (event: any) => {
        event.preventDefault();
        this.setState({ opacity: 0 });
    };

    render() {
        return (
            <div>
                <div style={{ opacity: this.state.opacity, transition: "opacity 1s", height: "20px" }}>{this.state.items[this.state.index]}</div>
                <a href="" onClick={this.show}>Show</a>
                <br />
                <a href="" onClick={this.hide}>Hide</a>
            </div>
        );
    }
}