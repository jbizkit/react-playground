import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Test } from './components/Test/Test';

export function init(): void {
    // ReactDOM.render(React.createElement(Test, { texts: [
    //     'Mall fdfdfd dfdf', 'First World', 'Nana BTS', 
    // ] }), document.getElementById("test-root"));
    ReactDOM.render(React.createElement(Test), document.getElementById("test-root"));
    // ReactDOM.render(React.createElement(Wizer), document.getElementById("test-root"));
    // ReactDOM.render(React.createElement(Wizer), document.getElementById("test-root"));
}