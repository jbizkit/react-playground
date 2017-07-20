// import * as React from 'react';
// import ReactCSSTransitionGroup = require('react-addons-css-transition-group');
// import { Child } from './Child';
// import ReactCSSTransitionReplace = require('react-css-transition-replace');

// import "./Test.scss";

// export interface Props {
//     texts: string[],
// }

// interface State {
//     hover: boolean,
//     text: string,
// }

// export class Test extends React.Component<Props, State> {
//     constructor(props) {
//         super(props);

//         this.state = {
//             hover: false,
//             text: this.props.texts[0],
//         };

//         this.setInterval();
//     }

//     private interval: number;
//     private i = 0;

//     private setInterval = () => {
//         this.interval = setInterval(() => {
//             this.setState({ text: this.props.texts[this.i] });
//             this.i += 1;
//             if (this.i == this.props.texts.length) this.i = 0;
//         }, 2000);
//     };

//     onMouseOver = () => {
//         clearInterval(this.interval);
//         this.i = 0;
//         this.setState({ hover: true });
//     };

//     onMouseOut = () => {
//         this.setState({ hover: false });
//         this.setInterval();
//     };

//     onGetContent = () => {
//         if (this.state.hover) return <div>Hovered</div>;

//         return (
//             <div className="childMainDiv">
//                  {/* <ReactCSSTransitionGroup transitionName="fade-wait"
//                     transitionEnterTimeout={500}
//                     transitionAppearTimeout={500}
//                     transitionLeaveTimeout={300}>
//                     <Child key={this.state.text} text={this.state.text} />
//                 </ReactCSSTransitionGroup>  */}
//                 <ReactCSSTransitionReplace transitionName="fade-wait"
//                     transitionEnterTimeout={500} transitionLeaveTimeout={500}>
//                     <Child key={this.state.text} text={this.state.text} />
//                 </ReactCSSTransitionReplace>
//             </div>
//         );
//     };

//     render() {
//         return (
//             <div className="mainDiv">
//                 {this.onGetContent()}
//             </div>
//         )
//     };
// };

import * as React from 'react';
import { Fader } from './Fader';

import "./Test.scss";

export class Test extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            components: [
                <div className="child1" key="one"><div>1</div>&nbsp;<div>2</div></div>,
                <div className="child1" key="two">Two sadfsad</div>,
                <div className="child1" key="three">Three d</div>
            ],
            length: 0,
            hover: false,
        };
    }

    toggleComponent = () => {
        this.setState({
            length: (this.state.length == 2) ? 0 : (this.state.length + 1),
        });

    };

    componentDidMount() {
        setInterval(this.toggleComponent, 2000);
    }

    getContent = () => {
        if (this.state.hover) return <div>Hovered</div>;

        return (
            <Fader>
                {this.state.components[this.state.length]}
            </Fader>
        );
    };

    onMouseOver = () => {
        this.setState({ hover: true });
    };

    onMouseOut = () => {
        this.setState({ hover: false });
    };

    render() {

        return (
            <div className="App" onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseOut} >
                <div className="child">
                    {this.getContent()}
                </div>
            </div>
        );
    }
}

