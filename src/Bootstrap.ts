import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Carousel } from './components/Test/Carousel';

export function init(): void {
    // ReactDOM.render(React.createElement(Test, { texts: [
    //     'Mall fdfdfd dfdf', 'First World', 'Nana BTS', 
    // ] }), document.getElementById("test-root"));
    ReactDOM.render(React.createElement(Carousel), document.getElementById("test-root"));
    // ReactDOM.render(React.createElement(Wizer), document.getElementById("test-root"));
    // ReactDOM.render(React.createElement(Wizer), document.getElementById("test-root"));
}